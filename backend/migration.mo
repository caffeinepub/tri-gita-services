import Map "mo:core/Map";

module {
  type OldLead = {
    name : Text;
    phoneNumber : Text;
    email : Text;
    address : Text;
    installationType : Text;
    message : Text;
  };

  type OldActor = {
    leads : Map.Map<Text, OldLead>;
  };

  type NewLead = {
    name : Text;
    phone : Text;
    email : Text;
    city : Text;
    systemSize : Text;
    message : Text;
  };

  type NewActor = {
    leads : Map.Map<Text, NewLead>;
  };

  public func run(old : OldActor) : NewActor {
    let newLeads = old.leads.map<Text, OldLead, NewLead>(
      func(_key, oldLead) {
        {
          name = oldLead.name;
          phone = oldLead.phoneNumber;
          email = oldLead.email;
          city = oldLead.address;
          systemSize = oldLead.installationType;
          message = oldLead.message;
        };
      }
    );
    { leads = newLeads };
  };
};
