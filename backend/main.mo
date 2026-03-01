import Map "mo:core/Map";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Iter "mo:core/Iter";
import MixinStorage "blob-storage/Mixin";

actor {
  include MixinStorage();

  type Lead = {
    name : Text;
    phoneNumber : Text;
    email : Text;
    address : Text;
    installationType : Text;
    message : Text;
  };

  module Lead {
    public func compareByName(a : Lead, b : Lead) : Order.Order {
      Text.compare(a.name, b.name);
    };
  };

  let leads = Map.empty<Text, Lead>();

  public shared ({ caller }) func submitLead(name : Text, phoneNumber : Text, email : Text, address : Text, installationType : Text, message : Text) : async () {
    let lead : Lead = {
      name;
      phoneNumber;
      email;
      address;
      installationType;
      message;
    };
    leads.add(email, lead);
  };

  public shared ({ caller }) func deleteLead(email : Text) : async () {
    if (not leads.containsKey(email)) {
      Runtime.trap("No lead with the given email exists. ");
    };
    leads.remove(email);
  };

  public query ({ caller }) func getAllLeadsSortedByName() : async [Lead] {
    leads.values().toArray().sort(Lead.compareByName);
  };

  public query ({ caller }) func getLead(email : Text) : async Lead {
    switch (leads.get(email)) {
      case (?lead) { lead };
      case (null) { Runtime.trap("No leads exist for this email.") };
    };
  };
};
