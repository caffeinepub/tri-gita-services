import Map "mo:core/Map";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import Array "mo:core/Array";
import Migration "migration";
import Order "mo:core/Order";
import Principal "mo:core/Principal";
import Iter "mo:core/Iter";
import AccessControl "authorization/access-control";
import MixinStorage "blob-storage/Mixin";
import MixinAuthorization "authorization/MixinAuthorization";

(with migration = Migration.run)
actor {
  let accessControlState = AccessControl.initState();
  include MixinStorage();
  include MixinAuthorization(accessControlState);

  type Lead = {
    name : Text;
    phone : Text;
    email : Text;
    city : Text;
    systemSize : Text;
    message : Text;
  };

  module Lead {
    public func compareByName(a : Lead, b : Lead) : Order.Order {
      Text.compare(a.name, b.name);
    };
  };

  type UserProfile = {
    name : Text;
  };

  let leads = Map.empty<Text, Lead>();
  let userProfiles = Map.empty<Principal, UserProfile>();

  public shared ({ caller }) func submitLead(name : Text, phone : Text, email : Text, city : Text, systemSize : Text, message : Text) : async () {
    let lead : Lead = {
      name;
      phone;
      email;
      city;
      systemSize;
      message;
    };
    leads.add(email, lead);
  };

  public shared ({ caller }) func deleteLead(email : Text) : async () {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can delete leads");
    };
    if (not leads.containsKey(email)) {
      Runtime.trap("No lead with the given email exists.");
    };
    leads.remove(email);
  };

  public query ({ caller }) func getAllLeadsSortedByName() : async [Lead] {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can list leads");
    };
    leads.values().toArray().sort(Lead.compareByName);
  };

  public query ({ caller }) func getLead(email : Text) : async Lead {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can retrieve leads");
    };
    switch (leads.get(email)) {
      case (?lead) { lead };
      case (null) { Runtime.trap("No leads exist for this email.") };
    };
  };

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can get their profile");
    };
    userProfiles.get(caller);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save their profile");
    };
    userProfiles.add(caller, profile);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };
};
