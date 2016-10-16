// if the database is empty on server start, create some sample data.
// we create a separate bootstrap.users.js file
// because we'll be wanting to set up a number of patient-scenario test users

Meteor.startup(function () {
  if (process.env.INITIALIZE) {
    console.info('no users in database!  adding some default users');

    var userId = null;

    var users = [
      {
        username: 'ada',
        password: 'ada',
        email: 'ada@test.org',
        profile: {
          given: 'Ada',
          family: "Lovelace",
          role: 'Administrator',
          gender: "Female",
          dateOfBirth: "1815-12-10",
          avatar: '/packages/clinical_accounts-famous-dead-people/avatars/ada.lovelace.jpg'
        }
          },
      {
        username: 'alan',
        password: 'alan',
        email: 'alan@test.org',
        profile: {
          given: 'Alan',
          family: "Turing",
          role: 'Programmer',
          gender: "Male",
          dateOfBirth: "1912-06-23",
          avatar: '/packages/clinical_accounts-famous-dead-people/avatars/alan.turing.jpg'
        }
          },
      {
        username: 'alexis',
        password: 'alexis',
        email: 'alexis@test.org',
        profile: {
          given: 'Alexis',
          family: "Carrel",
          role: 'Surgeon',
          gender: "Male",
          dateOfBirth: "1873-06-28",
          avatar: '/packages/clinical_accounts-famous-dead-people/avatars/alexis.carrel.jpg'
        }
          },
      {
        username: 'doisy',
        password: 'doisy',
        email: 'doisy@test.org',
        profile: {
          given: 'Edward',
          family: "Doisy",
          role: 'Chemist',
          gender: "Male",
          dateOfBirth: "1893-11-13",
          avatar: '/packages/clinical_accounts-famous-dead-people/avatars/edward.doisy.jpg'
        }
          },
      {
        username: 'tatum',
        password: 'tatum',
        email: 'tatum@test.org',
        profile: {
          given: 'Edward',
          family: "Tatum",
          role: 'Chemist',
          gender: "Male",
          dateOfBirth: "1909-12-14",
          avatar: '/packages/clinical_accounts-famous-dead-people/avatars/edward.tatum.jpg'
        }
          },
      {
        username: 'florence',
        password: 'florence',
        email: 'florence@test.org',
        profile: {
          given: 'Florence',
          family: "Nightingale",
          role: 'Nurse',
          gender: "Female",
          dateOfBirth: "1820-05-12",
          avatar: '/packages/clinical_accounts-famous-dead-people/avatars/florence.nightingale.jpg'
        }
          },
      {
        username: 'galen',
        password: 'galen',
        email: 'galen@test.org',
        profile: {
          given: 'Galen',
          family: "Aelius",
          role: 'Physician',
          gender: "Male",
          dateOfBirth: "0130-09-01",
          avatar: '/packages/clinical_accounts-famous-dead-people/avatars/galen.jpg'
        }
          },
      {
        username: 'george',
        password: 'george',
        email: 'george@test.org',
        profile: {
          given: 'George',
          family: "Beadle",
          role: 'Geneticist',
          gender: "Male",
          dateOfBirth: "1903-10-22",
          avatar: '/packages/clinical_accounts-famous-dead-people/avatars/george.beadle.jpg'
        }
          },
      {
        username: 'wald',
        password: 'wald',
        email: 'wald@test.org',
        profile: {
          given: 'George',
          family: "Wald",
          role: 'Opthamologist',
          gender: "Male",
          dateOfBirth: "1906-11-18",
          avatar: '/packages/clinical_accounts-famous-dead-people/avatars/george.wald.jpg'
        }
          },
      {
        username: 'carver',
        password: 'carver',
        email: 'carver@test.org',
        profile: {
          given: 'George Washington',
          family: "Carver",
          role: 'Laboratory Chemist',
          gender: "Male",
          dateOfBirth: "1864-01-01",
          avatar: '/packages/clinical_accounts-famous-dead-people/avatars/george.washington.carver.jpg'
        }
          },
      {
        username: 'hermann',
        password: 'hermann',
        email: 'hermann@test.org',
        profile: {
          given: 'Hermann',
          family: "Muller",
          role: 'Radiation Technologist',
          gender: "Male",
          dateOfBirth: "1890-12-21",
          avatar: '/packages/clinical_accounts-famous-dead-people/avatars/hermann.muller.jpg'
        }
          },

      {
        username: 'james',
        password: 'james',
        email: 'james@test.org',
        profile: {
          given: 'James',
          family: "Watson",
          role: 'Geneticist',
          gender: "Male",
          dateOfBirth: "1928-04-06",
          avatar: '/packages/clinical_accounts-famous-dead-people/avatars/james.watson.jpg'
        }
          },
      {
        username: 'eccles',
        password: 'eccles',
        email: 'eccles@test.org',
        profile: {
          prefix: 'Sir',
          given: 'John',
          family: "Eccles",
          role: 'Neurologist',
          gender: "Male",
          dateOfBirth: "1903-01-27",
          avatar: '/packages/clinical_accounts-famous-dead-people/avatars/john.eccles.jpg'
        }
          },
      {
        username: 'kurt',
        password: 'kurt',
        email: 'kurt@test.org',
        profile: {
          given: 'Kurt',
          family: "Vonnegut",
          role: 'Patient',
          gender: "Male",
          dateOfBirth: "1922-11-11",
          avatar: '/packages/clinical_accounts-famous-dead-people/avatars/kurt.vonnegut.jpg'
        }
          },
      {
        username: 'curie',
        password: 'curie',
        email: 'curie@test.org',
        profile: {
          prefix: 'Madam',
          given: 'Marie',
          family: "Curie",
          role: 'Nuclear Physicist',
          gender: "Female",
          dateOfBirth: "1867-11-07",
          avatar: '/packages/clinical_accounts-famous-dead-people/avatars/madam.curie.jpg'
        }
          },
      {
        username: 'mary',
        password: 'mary',
        email: 'mary@test.org',
        profile: {
          given: 'Mary',
          family: "Shelley",
          role: 'Patient',
          gender: "Female",
          dateOfBirth: "1797-08-30",
          avatar: '/packages/clinical_accounts-famous-dead-people/avatars/mary.shelley.jpg'
        }
          },
      {
        username: 'teresa',
        password: 'teresa',
        email: 'teresa@test.org',
        profile: {
          prefix: 'Mother',
          given: 'Teresa',
          family: "",
          role: 'Nurse',
          gender: "Female",
          dateOfBirth: "1910-08-26",
          avatar: '/packages/clinical_accounts-famous-dead-people/avatars/mother.teresa.jpg'
        }
          },
      {
        username: 'octavia',
        password: 'octavia',
        email: 'octavia@test.org',
        profile: {
          given: 'Octavia',
          family: "Butler",
          role: 'Patient',
          gender: "Female",
          dateOfBirth: "1947-06-22",
          avatar: '/packages/clinical_accounts-famous-dead-people/avatars/octavia.butler.jpg'
        }
          },
      {
        username: 'samuel',
        password: 'samuel',
        email: 'samuel@test.org',
        profile: {
          given: 'Samuel',
          family: "Clemens",
          role: 'Patient',
          gender: "Male",
          dateOfBirth: "1835-11-30",
          avatar: '/packages/clinical_accounts-famous-dead-people/avatars/samuel.clemens.jpg'
        }
          },
      {
        username: 'rosalind',
        password: 'rosalind',
        email: 'rosalind@test.org',
        profile: {
          given: 'Rosalind',
          family: "Franklin",
          role: 'Laboratory Administrator',
          gender: "Female",
          dateOfBirth: "1920-07-25",
          avatar: '/packages/clinical_accounts-famous-dead-people/avatars/rosalind.franklin.jpg'
        }
          },
      {
        username: 'nicola',
        password: 'nicola',
        email: 'nicola@test.org',
        profile: {
          given: 'Nicola',
          family: "Tesla",
          role: 'Electrical Engineer',
          gender: "Male",
          dateOfBirth: "1856-07-10",
          avatar: '/packages/clinical_accounts-famous-dead-people/avatars/nicola.tesla.jpg'
        }
          },
      {
        username: 'grace',
        password: 'grace',
        email: 'grace@test.org',
        profile: {
          given: 'Grace',
          family: "Hopper",
          role: 'Administrator',
          gender: "Female",
          dateOfBirth: "1906-12-09",
          avatar: '/packages/clinical_accounts-famous-dead-people/avatars/grace.hopper.jpg'
        }
          },
      {
        username: 'carl',
        password: 'carl',
        email: 'carl@test.org',
        profile: {
          given: 'Carl',
          family: "Gauss",
          role: 'MRI Researcher',
          gender: "Male",
          dateOfBirth: "1777-04-30",
          avatar: '/packages/clinical_accounts-famous-dead-people/avatars/carl.gauss.jpg'
        }
          },
      {
        username: 'claude',
        password: 'claude',
        email: 'claude@test.org',
        profile: {
          given: 'Claude',
          family: "Shannon",
          role: 'Electrical Engineer',
          gender: "Male",
          dateOfBirth: "1916-04-30",
          avatar: '/packages/clinical_accounts-famous-dead-people/avatars/claude.shannon.jpg'
        }
          },
      {
        username: 'barbara',
        password: 'barbara',
        email: 'barbara@test.org',
        profile: {
          given: 'Barbara',
          family: "McClintock",
          role: 'Cytogeneticist',
          gender: "Female",
          dateOfBirth: "1902-06-16",
          avatar: '/packages/clinical_accounts-famous-dead-people/avatars/barbara.mcclintock.jpg'
        }
          },
      {
        username: 'gertrude',
        password: 'gertrude',
        email: 'gertrude@test.org',
        profile: {
          given: 'Gertrude',
          family: "Elion",
          role: 'Pharmacologist',
          gender: "Female",
          dateOfBirth: "1918-01-23",
          avatar: '/packages/clinical_accounts-famous-dead-people/avatars/gertrude.elion.jpg'
        }
          },
      {
        username: 'rachel',
        password: 'rachel',
        email: 'rachel@test.org',
        profile: {
          given: 'Rachel',
          family: "Carson",
          role: 'Patient',
          gender: "Female",
          dateOfBirth: "1907-05-27",
          avatar: '/packages/clinical_accounts-famous-dead-people/avatars/rachel.carson.jpg'
        }
          },
      {
        username: 'maria',
        password: 'maria',
        email: 'maria@test.org',
        profile: {
          given: 'Maria',
          family: "Mayer",
          role: 'Nuclear Physicist',
          gender: "Female",
          dateOfBirth: "1906-06-28",
          avatar: '/packages/clinical_accounts-famous-dead-people/avatars/maria.mayer.jpg'
        }
          },
      {
        username: 'rita',
        password: 'rita',
        email: 'rita@test.org',
        profile: {
          given: 'Rita',
          family: "Levi-Montalcini",
          role: 'Neurologist',
          gender: "Female",
          dateOfBirth: "1909-04-22",
          avatar: '/packages/clinical_accounts-famous-dead-people/avatars/rita.levi.montalcini.jpg'
        }
          },
      {
        username: 'elizabeth',
        password: 'elizabeth',
        email: 'elizabeth@test.org',
        profile: {
          given: 'Elizabeth',
          family: "Blackwell",
          role: 'Physician',
          gender: "Female",
          dateOfBirth: "1821-02-03",
          avatar: '/packages/clinical_accounts-famous-dead-people/avatars/elizabeth.blackwell.jpg'
        }
          }
        ];


    if (process.env.Patients) {
      //if ((Patients.find().count() === 0) || (process.env.ADDITIONAL)) {
        var patientId;
        users.forEach (function(user){

          var fullName = "";
          if (user.profile.prefix){
            fullName = user.profile.prefix + " ";
          }
          if (user.profile.given){
            fullName = fullName + user.profile.given + " ";
          }
          if (user.profile.family){
            fullName = fullName + user.profile.family;
          }

          if (Patients.find({'name.text': fullName}).count() === 0){

            patientId = Patients.insert({
              name: [{
                text: fullName,
                given: [user.profile.given],
                family: [user.profile.family]
              }],
              active: true,
              gender: user.profile.gender,
              birthDate: new Date(user.profile.dateOfBirth),
              photo: [{
                url: user.profile.avatar
              }]
            });
            console.info('Patient created: ' + patientId);
          } else {
            console.log( fullName + ' already exists.  Skipping.');
          }

        });
      //} else {
      //  console.log('Looks like there are already Patients initialized.  Skipping.');
      //}
    } else {
      users.forEach( function (user){
        if (Meteor.users.find({username: user.username}).count() === 0) {
          userId = Accounts.createUser(user);
          console.info('User created: ' + userId);
        } else {
          console.log( users.username + ' already exists.  Skipping.');
        }
      });
    }


  }
});
