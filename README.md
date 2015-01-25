**accounts-famous-dead-people** is a Meteorite package to populate your Meteor.users() collection with famous dead people.  


------------------------
### Installation

First, install the accounts-famous-dead-people package from the command line, like so:

````
meteor add clinical:accounts-famous-dead-people
````



------------------------
### Default User Record Schema  

The user objects are have a fairly simple document schema that looks like the following:
````js
{
  username: 'ada',
  password: 'ada',
  email: 'ada@test.org',
  profile: {
    name: 'Ada Lovelace',
    role: 'Administrator',
    avatar: '/packages/clinical_accounts-famous-dead-people/avatars/ada.lovelace.jpg'
  }
}
````

------------------------
### Default Usernames and Passwords  

Usernames and passwords for all the users should be the same.  For the most part, the username and password will both be the person's first name, but a number of users are set as the last name.  All emails will be at the ``test.org`` domain.



------------------------
### Users List

Ada Lovelace  
Alan Turing  
Alexis Carrel  
Edward Doisy  
Edward Tatum  
Florence Nightingale  
Galen  
George Beadle  
George Wald  
George Washington Carver  
Hermann Muller  
Hygea  
James Watson  
John Eccles  
Kurt Vonnegut  
Madam Curie  
Mary Shelley  
Mother Teresa  
Octavia Butler  
Roger Sperry  
Samuel Clemens  
Rosalind Franklin  
Nicola Tesla  
Grace Hopper  
Carl Gauss  
Claude Shannon  
Barbara Mcclintock  
Gertrude Elion  
Rachel Carson  
Maria Mayer  
Rita Levi Montalcini  
Elizabeth Blackwell  


------------------------
### Example Usage  

````html
{{#each userList}}
{{profile.name}}<br>
{{/each}}
````

````js
if (Meteor.isClient) {
  Meteor.subscribe("users");

  Template.registerHelper('userList', function(){
    return Meteor.users.find();
  });
}

if (Meteor.isServer) {
  Meteor.publish("users", function(){
    return Meteor.users.find();
  });
}
````

------------------------
### License

Code is MIT License. Use as you wish, including for commercial purposes.  
Images should all be in the public domain.
