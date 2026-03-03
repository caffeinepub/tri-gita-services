import Map "mo:core/Map";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Principal "mo:core/Principal";
import Iter "mo:core/Iter";
import AccessControl "authorization/access-control";
import MixinStorage "blob-storage/Mixin";
import MixinAuthorization "authorization/MixinAuthorization";



actor {
  let accessControlState = AccessControl.initState();
  include MixinStorage();
  include MixinAuthorization(accessControlState);

  type CompanyInfo = {
    hqContact : DepartmentContact;
    bayernBrancheContact : DepartmentContact;
    baumgartenBrancheContact : DepartmentContact;
    contacts : {
      sales : DepartmentContact;
      service : DepartmentContact;
      media : DepartmentContact;
      billing : DepartmentContact;
    };
    operatingAreas : {
      germany : Text;
      surroundingCountries : Text;
      outsideEurope : Text;
    };
  };

  type DepartmentContact = {
    name : Text;
    email : Text;
    phone : Text;
    description : ?Text;
  };

  type Lead = {
    name : Text;
    phone : Text;
    email : Text;
    city : Text;
    systemSize : Text;
    message : Text;
    companyInfo : CompanyInfo;
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
    let companyInfo : CompanyInfo = {
      hqContact = {
        name = "Büro Adresse, Hauptsitz: TRI-GITA Services GmbH";
        email = "info@tri-gita.com";
        phone = "+49 (0) 30 / 403 672 401";
        description = ?"Für allgemeine Preisanfragen und Beratung.";
      };
      bayernBrancheContact = {
        name = "Bayern Brandenburg";
        email = "info@tri-gita.com";
        phone = "+49 (0) 30 / 403 672 401";
        description = ?" ";
      };
      baumgartenBrancheContact = {
        name = "Österreich – Baumgarten";
        email = "info@tri-gita.com";
        phone = "+49 (0) 30 / 403 672 401";
        description = ?" ";
      };
      contacts = {
        sales = {
          name = "TRI-GITA Services GmbH (Vertrieb)";
          email = "vertrieb@tri-gita.com";
          phone = "+49 (0) 30 / 403 672 401";
          description = ?" ";
        };
        service = {
          name = "TRI-GITA Services GmbH (Service)";
          email = "service@tri-gita.com";
          phone = "+49 (0) 30 / 403 672 401";
          description = ?" ";
        };
        media = {
          name = "TRI-GITA Services GmbH (Medien)";
          email = "medien@tri-gita.com";
          phone = "+49 (0) 30 / 403 672 401";
          description = ?" ";
        };
        billing = {
          name = "TRI-GITA Services GmbH (Abrechnung)";
          email = "rechnungen@tri-gita.com";
          phone = "+49 (0) 30 / 403 672 401";
          description = ?" ";
        };
      };
      operatingAreas = {
        germany = "Germany";
        surroundingCountries = "Surrounding countries of Germany";
        outsideEurope = "Charged with VAT";
      };
    };

    let lead : Lead = {
      name;
      phone;
      email;
      city;
      systemSize;
      message;
      companyInfo;
    };
    leads.add(email, lead);
  };

  public shared ({ caller }) func deleteLead(email : Text) : async () {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can delete leads");
    };
    if (not leads.containsKey(email)) {
      Runtime.trap("No lead with the given email exists");
    };
    leads.remove(email);
  };

  public shared ({ caller }) func deleteAllLeads() : async () {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can delete leads");
    };
    leads.clear();
  };

  // Verified admin-only
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

  // Verified admin-only
  public shared ({ caller }) func addLead(lead : Lead) : async () {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can add leads");
    };
    leads.add(lead.email, lead);
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
