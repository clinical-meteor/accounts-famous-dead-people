// if the database is empty on server start, create some sample data.
// we create a separate bootstrap.users.js file
// because we'll be wanting to set up a number of patient-scenario test users

Meteor.startup(function () {
    if (Meteor.users.find().count() === 0) {
        log_event('no users in database!  adding some default users', LogLevel.Info, this);

        var userId = null;

        // crate our administrator
        userId = Accounts.createUser({
            username: 'ada',
            password: 'ada',
            email: 'ada@test.org',
            profile: {
                name: 'Ada Lovelace',
                role: 'Administrator',
                avatar: '/avatars/ada.lovelace.jpg'
            }
        });
        log_event('Account created: ' + userId, LogLevel.Info, this);

        userId = Accounts.createUser({
            username: 'alan',
            password: 'alan',
            email: 'alan@test.org',
            profile: {
                name: 'Alan Turing',
                role: 'Programmer',
                avatar: '/avatars/alan.turing.jpg'
            }
        });
        log_event('Account created: ' + userId, LogLevel.Info, this);

        userId = Accounts.createUser({
            username: 'alexis',
            password: 'alexis',
            email: 'alexis@test.org',
            profile: {
                name: 'Alexis Carrel',
                role: 'Surgeon',
                avatar: '/avatars/alexis.carrel.jpg'
            }
        });
        log_event('Account created: ' + userId, LogLevel.Info, this);

        userId = Accounts.createUser({
            username: 'doisy',
            password: 'doisy',
            email: 'doisy@test.org',
            profile: {
                name: 'Edward Doisy',
                role: 'Chemist',
                avatar: '/avatars/edward.doisy.jpg'
            }
        });
        log_event('Account created: ' + userId, LogLevel.Info, this);

        userId = Accounts.createUser({
            username: 'tatum',
            password: 'tatum',
            email: 'tatum@test.org',
            profile: {
                name: 'Edward Tatum',
                role: 'Chemist',
                avatar: '/avatars/edward.tatum.jpg'
            }
        });
        log_event('Account created: ' + userId, LogLevel.Info, this);

        userId = Accounts.createUser({
            username: 'florence',
            password: 'florence',
            email: 'florence@test.org',
            profile: {
                name: 'Florence Nightingale',
                role: 'Nurse',
                avatar: '/avatars/florence.nightingale.jpg'
            }
        });
        log_event('Account created: ' + userId, LogLevel.Info, this);

        userId = Accounts.createUser({
            username: 'galen',
            password: 'galen',
            email: 'galen@test.org',
            profile: {
                name: 'Galen',
                role: 'Physician',
                avatar: '/avatars/galen.jpg'
            }
        });
        log_event('Account created: ' + userId, LogLevel.Info, this);

        userId = Accounts.createUser({
            username: 'george',
            password: 'george',
            email: 'george@test.org',
            profile: {
                name: 'George Beadle',
                role: 'Geneticist',
                avatar: '/avatars/george.beadle.jpg'
            }
        });
        log_event('Account created: ' + userId, LogLevel.Info, this);

        userId = Accounts.createUser({
            username: 'wald',
            password: 'wald',
            email: 'wald@test.org',
            profile: {
                name: 'George Wald',
                role: 'Opthamologist',
                avatar: '/avatars/george.wald.jpg'
            }
        });
        log_event('Account created: ' + userId, LogLevel.Info, this);

        userId = Accounts.createUser({
            username: 'carver',
            password: 'carver',
            email: 'carver@test.org',
            profile: {
                name: 'George Washington Carver',
                role: 'Laboratory Chemist',
                avatar: '/avatars/george.washington.carver.jpg'
            }
        });
        log_event('Account created: ' + userId, LogLevel.Info, this);

        userId = Accounts.createUser({
            username: 'hermann',
            password: 'hermann',
            email: 'hermann@test.org',
            profile: {
                name: 'Hermann Muller',
                role: 'Radiation Technologist',
                avatar: '/avatars/hermann.muller.jpg'
            }
        });
        log_event('Account created: ' + userId, LogLevel.Info, this);

        userId = Accounts.createUser({
            username: 'hygea',
            password: 'hygea',
            email: 'hygea@test.org',
            profile: {
                name: 'Hygea',
                role: 'Scrub Nurse',
                avatar: '/avatars/hygea.jpg'
            }
        });
        log_event('Account created: ' + userId, LogLevel.Info, this);

        userId = Accounts.createUser({
            username: 'james',
            password: 'james',
            email: 'james@test.org',
            profile: {
                name: 'James Watson',
                role: 'Geneticist',
                avatar: '/avatars/james.watson.jpg'
            }
        });
        log_event('Account created: ' + userId, LogLevel.Info, this);

        userId = Accounts.createUser({
            username: 'eccles',
            password: 'eccles',
            email: 'eccles@test.org',
            profile: {
                name: 'Sir John Eccles',
                role: 'Neurologist',
                avatar: '/avatars/john.eccles.jpg'
            }
        });
        log_event('Account created: ' + userId, LogLevel.Info, this);

        userId = Accounts.createUser({
            username: 'kurt',
            password: 'kurt',
            email: 'kurt@test.org',
            profile: {
                name: 'Kurt Vonnegut',
                role: 'Patient',
                avatar: '/avatars/kurt.vonnegut.jpg'
            }
        });
        log_event('Account created: ' + userId, LogLevel.Info, this);

        userId = Accounts.createUser({
            username: 'curie',
            password: 'curie',
            email: 'curie@test.org',
            profile: {
                name: 'Madam Curie',
                role: 'Nuclear Physicist',
                avatar: '/avatars/madam.curie.jpg'
            }
        });
        log_event('Account created: ' + userId, LogLevel.Info, this);

        userId = Accounts.createUser({
            username: 'mary',
            password: 'mary',
            email: 'mary@test.org',
            profile: {
                name: 'Mary Shelley',
                role: 'Patient',
                avatar: '/avatars/mary.shelley.jpg'
            }
        });
        log_event('Account created: ' + userId, LogLevel.Info, this);

        userId = Accounts.createUser({
            username: 'teresa',
            password: 'teresa',
            email: 'teresa@test.org',
            profile: {
                name: 'Mother Teresa',
                role: 'Nurse',
                avatar: '/avatars/mother.teresa.jpg'
            }
        });
        log_event('Account created: ' + userId, LogLevel.Info, this);

        userId = Accounts.createUser({
            username: 'octavia',
            password: 'octavia',
            email: 'octavia@test.org',
            profile: {
                name: 'Octavia Butler',
                role: 'Patient',
                avatar: '/avatars/octavia.butler.jpg'
            }
        });
        log_event('Account created: ' + userId, LogLevel.Info, this);

        userId = Accounts.createUser({
            username: 'samuel',
            password: 'samuel',
            email: 'samuel@test.org',
            profile: {
                name: 'Samuel Clemens',
                role: 'Patient',
                avatar: '/avatars/samuel.clemens.jpg'
            }
        });
        log_event('Account created: ' + userId, LogLevel.Info, this);

        userId = Accounts.createUser({
            username: 'rosalind',
            password: 'rosalind',
            email: 'rosalind@test.org',
            profile: {
                name: 'Rosalind Franklin',
                role: 'Laboratory Administrator',
                avatar: '/avatars/rosalind.franklin.jpg'
            }
        });
        log_event('Account created: ' + userId, LogLevel.Info, this);


        userId = Accounts.createUser({
            username: 'nicola',
            password: 'nicola',
            email: 'nicola@test.org',
            profile: {
                name: 'Nicola Tesla',
                role: 'Electrical Engineer',
                avatar: '/avatars/nicola.tesla.jpg'
            }
        });
        log_event('Account created: ' + userId, LogLevel.Info, this);

        userId = Accounts.createUser({
            username: 'grace',
            password: 'grace',
            email: 'grace@test.org',
            profile: {
                name: 'Grace Hopper',
                role: 'Administrator',
                avatar: '/avatars/grace.hopper.jpg'
            }
        });
        log_event('Account created: ' + userId, LogLevel.Info, this);


        userId = Accounts.createUser({
            username: 'carl',
            password: 'carl',
            email: 'carl@test.org',
            profile: {
                name: 'Carl Gauss',
                role: 'MRI Researcher',
                avatar: '/avatars/carl.gauss.jpg'
            }
        });
        log_event('Account created: ' + userId, LogLevel.Info, this);


        userId = Accounts.createUser({
            username: 'claude',
            password: 'claude',
            email: 'claude@test.org',
            profile: {
                name: 'Claude Shannon',
                role: 'Electrical Engineer',
                avatar: '/avatars/claude.shannon.jpg'
            }
        });
        log_event('Account created: ' + userId, LogLevel.Info, this);

        userId = Accounts.createUser({
            username: 'barbara',
            password: 'barbara',
            email: 'barbara@test.org',
            profile: {
                name: 'Barbara McClintock',
                role: 'Cytogeneticist',
                avatar: '/avatars/barbara.mcclintock.jpg'
            }
        });
        log_event('Account created: ' + userId, LogLevel.Info, this);


        userId = Accounts.createUser({
            username: 'gertrude',
            password: 'gertrude',
            email: 'gertrude@test.org',
            profile: {
                name: 'Gertrude Elion',
                role: 'Pharmacologist',
                avatar: '/avatars/gertrude.elion.jpg'
            }
        });
        log_event('Account created: ' + userId, LogLevel.Info, this);

        userId = Accounts.createUser({
            username: 'rachel',
            password: 'rachel',
            email: 'rachel@test.org',
            profile: {
                name: 'Rachel Carson',
                role: 'Patient',
                avatar: '/avatars/rachel.carson.jpg'
            }
        });
        log_event('Account created: ' + userId, LogLevel.Info, this);

        userId = Accounts.createUser({
            username: 'maria',
            password: 'maria',
            email: 'maria@test.org',
            profile: {
                name: 'Maria Mayer',
                role: 'Nuclear Physicist',
                avatar: '/avatars/maria.mayer.jpg'
            }
        });
        log_event('Account created: ' + userId, LogLevel.Info, this);

        userId = Accounts.createUser({
            username: 'rita',
            password: 'rita',
            email: 'rita@test.org',
            profile: {
                name: 'Rita Levi-Montalcini',
                role: 'Neurologist',
                avatar: '/avatars/rita.levi.montalcini.jpg'
            }
        });
        log_event('Account created: ' + userId, LogLevel.Info, this);

        userId = Accounts.createUser({
            username: 'elizabeth',
            password: 'elizabeth',
            email: 'elizabeth@test.org',
            profile: {
                name: 'Elizabeth Blackwell',
                role: 'Physician',
                avatar: '/avatars/elizabeth.blackwell.jpg'
            }
        });
        log_event('Account created: ' + userId, LogLevel.Info, this);


    }
});
