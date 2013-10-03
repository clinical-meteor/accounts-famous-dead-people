**accounts-famous-dead-people** is a Meteorite package to populate your Meteor.users() collection with famous dead people.  


------------------------
### Installation

First, install the accounts-famous-dead-people package from the command line, like so:

````
mrt add accounts-famous-dead-people
````

Alternatively, if you'd like to bypass Atmosphere, and install directly from GitHub, you could update your application's smart.json file, like so:

````js
{
  "meteor": {
    "branch": "master"
  },
  "packages": {
    "accounts-famous-dead-people": {
      "git": "https://github.com/awatson1978/accounts-famous-dead-people.git"
    }
  }
}

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
    avatar: '/avatars/ada.lovelace.jpg'
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
george.wald  
george.washington.carver  
hermann.muller  
hygea  
james.watson  
john.eccles  
kurt.vonnegut  
madam.curie  
mary.shelley  
mother.teresa  
octavia.butler  
roger.sperry  
samuel.clemens  
rosalind.franklin  
nicola.tesla  
grace.hopper  
carl.gauss  
claude.shannon  
barbara.mcclintock  
gertrude.elion  
rachel.carson  
maria.mayer  
rita.levi.montalcini  
elizabeth.blackwell  

------------------------
### License

Code is MIT License. Use as you wish, including for commercial purposes.  
Images should all be in the public domain.

------------------------
### Support
Found this package to be useful?  Consider tipping the package maintainer for their time!  

[![Support via Gittip](https://raw.github.com/gittip/www.gittip.com/master/www/assets/gittip.png)](https://www.gittip.com/awatson1978/)  

