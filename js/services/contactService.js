myApp.service('contactService', function(){
	var uniqId = 4;
	var contactList = [
        {id:  1, name:'Roshan', mobile: 9767816191, email: "roshanmali1205@gmail.com"},
        {id:  2, name:'Kiran', mobile: 9192939495, email: "kiran@gmail.com"},
        {id:  3, name:'Ravi', mobile: 7878787878, email: "ravi@gmail.com"}
        ];

    //adding  and  save the contact list
	this.save = function(contact){s
	 	if (contact.id == null) {
            contact.id = uniqId++;
            contactList.push(contact);
        } else {
            for (i in contactList) {
                if (contactList[i].id == contact.id) {
                    contactList[i] = contact;
                }
            }
        }
	}

    //Get the selected contact list
	this.get = function (id) {
        for (i in contactList) {
            if (contactList[i].id == id) {
                return contactList[i];
            }
        }

    }

    //delete the contact list
     this.delete = function (id) {
        for (i in contactList) {
            if (contactList[i].id == id) {
                contactList.splice(i, 1);
            }
        }
    }

	this.list = function () {
        
        return contactList;
    }

})

