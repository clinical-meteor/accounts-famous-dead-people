// if the database is empty on server start, create some sample data.
// we create a separate bootstrap.users.js file
// because we'll be wanting to set up a number of patient-scenario test users

Meteor.startup(function () {
  if (Meteor.users.find().count() === 0) {
    console.info('no users in database!  adding some default users');

    var userId = null;

    var users = [
      {
        username: 'ada',
        password: 'ada',
        email: 'ada@test.org',
        profile: {
          fullName: 'Ada Lovelace',
          role: 'Administrator',
          gender: "Female",
          avatar: '/packages/clinical_accounts-famous-dead-people/avatars/ada.lovelace.jpg'
        }
          },
      {
        username: 'alan',
        password: 'alan',
        email: 'alan@test.org',
        profile: {
          fullName: 'Alan Turing',
          role: 'Programmer',
          gender: "Male",
          avatar: '/packages/clinical_accounts-famous-dead-people/avatars/alan.turing.jpg'
        }
          },
      {
        username: 'alexis',
        password: 'alexis',
        email: 'alexis@test.org',
        profile: {
          fullName: 'Alexis Carrel',
          role: 'Surgeon',
          gender: "Male",
          avatar: '/packages/clinical_accounts-famous-dead-people/avatars/alexis.carrel.jpg'
        }
          },
      {
        username: 'doisy',
        password: 'doisy',
        email: 'doisy@test.org',
        profile: {
          fullName: 'Edward Doisy',
          role: 'Chemist',
          gender: "Male",
          avatar: '/packages/clinical_accounts-famous-dead-people/avatars/edward.doisy.jpg'
        }
          },
      {
        username: 'tatum',
        password: 'tatum',
        email: 'tatum@test.org',
        profile: {
          fullName: 'Edward Tatum',
          role: 'Chemist',
          gender: "Male",
          avatar: '/packages/clinical_accounts-famous-dead-people/avatars/edward.tatum.jpg'
        }
          },
      {
        username: 'florence',
        password: 'florence',
        email: 'florence@test.org',
        profile: {
          fullName: 'Florence Nightingale',
          role: 'Nurse',
          gender: "Female",
          avatar: '/packages/clinical_accounts-famous-dead-people/avatars/florence.nightingale.jpg'
        }
          },
      {
        username: 'galen',
        password: 'galen',
        email: 'galen@test.org',
        profile: {
          fullName: 'Galen',
          role: 'Physician',
          gender: "Male",
          avatar: '/packages/clinical_accounts-famous-dead-people/avatars/galen.jpg'
        }
          },
      {
        username: 'george',
        password: 'george',
        email: 'george@test.org',
        profile: {
          fullName: 'George Beadle',
          role: 'Geneticist',
          gender: "Male",
          avatar: '/packages/clinical_accounts-famous-dead-people/avatars/george.beadle.jpg'
        }
          },
      {
        username: 'wald',
        password: 'wald',
        email: 'wald@test.org',
        profile: {
          fullName: 'George Wald',
          role: 'Opthamologist',
          gender: "Male",
          avatar: '/packages/clinical_accounts-famous-dead-people/avatars/george.wald.jpg'
        }
          },
      {
        username: 'carver',
        password: 'carver',
        email: 'carver@test.org',
        profile: {
          fullName: 'George Washington Carver',
          role: 'Laboratory Chemist',
          gender: "Male",
          avatar: '/packages/clinical_accounts-famous-dead-people/avatars/george.washington.carver.jpg'
        }
          },
      {
        username: 'hermann',
        password: 'hermann',
        email: 'hermann@test.org',
        profile: {
          fullName: 'Hermann Muller',
          role: 'Radiation Technologist',
          gender: "Male",
          avatar: '/packages/clinical_accounts-famous-dead-people/avatars/hermann.muller.jpg'
        }
          },
      {
        username: 'hygea',
        password: 'hygea',
        email: 'hygea@test.org',
        profile: {
          fullName: 'Hygea',
          role: 'Scrub Nurse',
          gender: "Female",
          avatar: '/packages/clinical_accounts-famous-dead-people/avatars/hygea.jpg'
        }
          },
      {
        username: 'james',
        password: 'james',
        email: 'james@test.org',
        profile: {
          fullName: 'James Watson',
          role: 'Geneticist',
          gender: "Male",
          avatar: '/packages/clinical_accounts-famous-dead-people/avatars/james.watson.jpg'
        }
          },
      {
        username: 'eccles',
        password: 'eccles',
        email: 'eccles@test.org',
        profile: {
          fullName: 'Sir John Eccles',
          role: 'Neurologist',
          gender: "Male",
          avatar: '/packages/clinical_accounts-famous-dead-people/avatars/john.eccles.jpg'
        }
          },
      {
        username: 'kurt',
        password: 'kurt',
        email: 'kurt@test.org',
        profile: {
          fullName: 'Kurt Vonnegut',
          role: 'Patient',
          gender: "Male",
          avatar: '/packages/clinical_accounts-famous-dead-people/avatars/kurt.vonnegut.jpg'
        }
          },
      {
        username: 'curie',
        password: 'curie',
        email: 'curie@test.org',
        profile: {
          fullName: 'Madam Curie',
          role: 'Nuclear Physicist',
          gender: "Female",
          avatar: '/packages/clinical_accounts-famous-dead-people/avatars/madam.curie.jpg'
        }
          },
      {
        username: 'mary',
        password: 'mary',
        email: 'mary@test.org',
        profile: {
          fullName: 'Mary Shelley',
          role: 'Patient',
          gender: "Female",
          avatar: '/packages/clinical_accounts-famous-dead-people/avatars/mary.shelley.jpg'
        }
          },
      {
        username: 'teresa',
        password: 'teresa',
        email: 'teresa@test.org',
        profile: {
          fullName: 'Mother Teresa',
          role: 'Nurse',
          gender: "Female",
          avatar: '/packages/clinical_accounts-famous-dead-people/avatars/mother.teresa.jpg'
        }
          },
      {
        username: 'octavia',
        password: 'octavia',
        email: 'octavia@test.org',
        profile: {
          fullName: 'Octavia Butler',
          role: 'Patient',
          gender: "Female",
          avatar: '/packages/clinical_accounts-famous-dead-people/avatars/octavia.butler.jpg'
        }
          },
      {
        username: 'samuel',
        password: 'samuel',
        email: 'samuel@test.org',
        profile: {
          fullName: 'Samuel Clemens',
          role: 'Patient',
          gender: "Male",
          avatar: '/packages/clinical_accounts-famous-dead-people/avatars/samuel.clemens.jpg'
        }
          },
      {
        username: 'rosalind',
        password: 'rosalind',
        email: 'rosalind@test.org',
        profile: {
          fullName: 'Rosalind Franklin',
          role: 'Laboratory Administrator',
          gender: "Female",
          avatar: '/packages/clinical_accounts-famous-dead-people/avatars/rosalind.franklin.jpg'
        }
          },
      {
        username: 'nicola',
        password: 'nicola',
        email: 'nicola@test.org',
        profile: {
          fullName: 'Nicola Tesla',
          role: 'Electrical Engineer',
          gender: "Male",
          avatar: '/packages/clinical_accounts-famous-dead-people/avatars/nicola.tesla.jpg'
        }
          },
      {
        username: 'grace',
        password: 'grace',
        email: 'grace@test.org',
        profile: {
          fullName: 'Grace Hopper',
          role: 'Administrator',
          gender: "Female",
          avatar: '/packages/clinical_accounts-famous-dead-people/avatars/grace.hopper.jpg'
        }
          },
      {
        username: 'carl',
        password: 'carl',
        email: 'carl@test.org',
        profile: {
          fullName: 'Carl Gauss',
          role: 'MRI Researcher',
          gender: "Male",
          avatar: '/packages/clinical_accounts-famous-dead-people/avatars/carl.gauss.jpg'
        }
          },
      {
        username: 'claude',
        password: 'claude',
        email: 'claude@test.org',
        profile: {
          fullName: 'Claude Shannon',
          role: 'Electrical Engineer',
          gender: "Male",
          avatar: '/packages/clinical_accounts-famous-dead-people/avatars/claude.shannon.jpg'
        }
          },
      {
        username: 'barbara',
        password: 'barbara',
        email: 'barbara@test.org',
        profile: {
          fullName: 'Barbara McClintock',
          role: 'Cytogeneticist',
          gender: "Female",
          avatar: '/packages/clinical_accounts-famous-dead-people/avatars/barbara.mcclintock.jpg'
        }
          },
      {
        username: 'gertrude',
        password: 'gertrude',
        email: 'gertrude@test.org',
        profile: {
          fullName: 'Gertrude Elion',
          role: 'Pharmacologist',
          gender: "Female",
          avatar: '/packages/clinical_accounts-famous-dead-people/avatars/gertrude.elion.jpg'
        }
          },
      {
        username: 'rachel',
        password: 'rachel',
        email: 'rachel@test.org',
        profile: {
          fullName: 'Rachel Carson',
          role: 'Patient',
          gender: "Female",
          avatar: '/packages/clinical_accounts-famous-dead-people/avatars/rachel.carson.jpg'
        }
          },
      {
        username: 'maria',
        password: 'maria',
        email: 'maria@test.org',
        profile: {
          fullName: 'Maria Mayer',
          role: 'Nuclear Physicist',
          gender: "Female",
          avatar: '/packages/clinical_accounts-famous-dead-people/avatars/maria.mayer.jpg'
        }
          },
      {
        username: 'rita',
        password: 'rita',
        email: 'rita@test.org',
        profile: {
          fullName: 'Rita Levi-Montalcini',
          role: 'Neurologist',
          gender: "Female",
          avatar: '/packages/clinical_accounts-famous-dead-people/avatars/rita.levi.montalcini.jpg'
        }
          },
      {
        username: 'elizabeth',
        password: 'elizabeth',
        email: 'elizabeth@test.org',
        profile: {
          fullName: 'Elizabeth Blackwell',
          role: 'Physician',
          gender: "Female",
          avatar: '/packages/clinical_accounts-famous-dead-people/avatars/elizabeth.blackwell.jpg'
        }
          }
        ];


    if (process.env.Patients) {
      if ((Patients.find().count() === 0) || (process.env.ADDITIONAL)) {
        var patientId;
        users.forEach(function(user){
          patientId = Patients.insert({
            name: [{
              text: user.profile.fullName
            }],
            active: true,
            gender: user.profile.gender,
            photo: [{
              url: user.profile.avatar
            }]
          });
          console.info('Patient created: ' + userId);
        });
      } else {
        console.log('Looks like there are already Patients initialized.  Skipping.');
      }
    } else {
      if (Meteor.users.find().count() === 0) {
        users.forEach(function(user){
          userId = Accounts.createUser(user);
          console.info('User created: ' + userId);
        });
      } else {
        console.log('Looks like there are already Accounts initialized.  Skipping.');
      }
    }




  }
});
