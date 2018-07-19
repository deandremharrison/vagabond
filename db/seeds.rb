# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
City.destroy_all
Post.destroy_all

atlanta = City.create(name: "Atlanta", image_url: "https://www.atlantaga.gov/Home/ShowImage?id=3272&t=636335665341170000", state: "Georgia", country: "USA" )

london = City.create(name: "London", image_url: "https://thesavvybackpacker.com/wp-content/uploads/2016/03/london-city-guide.jpg", state: "", country: "England" )

new_york = City.create(name: "New York", image_url: "https://images.musement.com/cover/0002/42/view-on-manhattan-at-night-new-york-usa-jpg_header-141511.jpeg?w=1200&h=630&q=60&fit=crop", state: "New York", country: "USA" )

new_orleans = City.create(name: "New Orleans", image_url: "https://photonews247.com/wp-content/uploads/2015/11/Walgreens-Drugs-C-opened-24-hours-at-900-Canal-Street-New-Orleans-LA.jpg", state: "Louisana", country: "USA" )

philly = City.create(name: "Philadelphia", image_url: "https://www.phillymag.com/wp-content/uploads/sites/3/2014/03/rocky.jpg", state: "Pennsylvania", country: "USA")

portland = City.create(name: "Portland", image_url: "https://www.portlandoregon.gov/shared/cfm/image.cfm?id=628547", state: "Oregon", country: "USA")

andrew = User.create(name: "Andrew", password: "password", profile_pic: "https://www.law.berkeley.edu/wp-content/uploads/2015/04/Blank-profile.png
")

dan = User.create(name: "Dan", password: "dandan", profile_pic: "https://www.law.berkeley.edu/wp-content/uploads/2015/04/Blank-profile.png
")

jordan = User.create(name: "Jordan", password: "pinkunicorn", profile_pic: "https://www.law.berkeley.edu/wp-content/uploads/2015/04/Blank-profile.png
")

dre = User.create(name: "Dre", password: "rugrats", profile_pic: "https://www.law.berkeley.edu/wp-content/uploads/2015/04/Blank-profile.png
")


Post.create(user_id: andrew.id, city_id: new_york.id, title: "Unique New York", body: "new york is pretty cool, ya know? Steve wants reflections, so let's give him reflections. Put light against light - you have nothing. Put dark against dark - you have nothing. It's the contrast of light and dark that each give the other one meaning. This is the way you take out your flustrations. Everybody needs a friend. Just let your mind wander and enjoy. This should make you happy.

This is gonna be a happy little seascape. The only prerequisite is that it makes you happy. If it makes you happy then it's good. Don't kill all your dark areas - you need them to show the light. God gave you this gift of imagination. Use it.

I thought today we would do a happy little picture.")

Post.create(user_id: andrew.id, city_id: new_york.id, title: "State of Mind", body: "Nya nya nyan throwup on your pillow, and sit on the laptop and this cat happen now, it was too purr-fect!!! knock over christmas tree so howl on top of tall thing or lounge in doorway. Purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table mrow. Refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am then cats take over the world. Pose purrfectly to show my beauty attack dog, run away and pretend to be victim so scratch the furniture and always hungry. Weigh eight pounds but take up a full-size bed meow for food, then when human fills food dish, take a few bites of food and continue meowing, yet immediately regret falling into bathtub.")

Post.create(user_id: andrew.id, city_id: new_york.id, title: "Amazing!", body: "Sweet jujubes lemon drops caramels. Tiramisu fruitcake chocolate bar caramels. Sweet muffin gummies biscuit brownie cotton candy cotton candy gummi bears. Macaroon lemon drops carrot cake carrot cake powder sesame snaps chocolate cake bear claw. Sesame snaps sweet roll fruitcake topping tart toffee. Brownie icing biscuit cake pastry candy. Pudding cheesecake powder toffee candy sesame snaps chupa chups.

Icing lemon drops carrot cake jujubes bonbon sweet roll brownie. Biscuit dragée cake chocolate fruitcake. Fruitcake chupa chups jujubes ice cream caramels pastry. Pudding toffee biscuit lemon drops marzipan jelly beans cake. Gingerbread bonbon gingerbread tart tart cupcake. Marzipan chupa chups marzipan sweet chocolate.")

Post.create(user_id: andrew.id, city_id: new_york.id, title: "Horrible!", body: "Lorem ipsum dolor amet cornhole taiyaki neutra thundercats irony offal butcher hoodie gluten-free blog knausgaard food truck taxidermy vinyl fixie. Occupy distillery waistcoat salvia. Sustainable authentic PBR&B brooklyn single-origin coffee snackwave. Brooklyn irony unicorn, pop-up disrupt wayfarers DIY edison bulb truffaut coloring book adaptogen 90's seitan. Raw denim tote bag try-hard bespoke.

Mlkshk craft beer williamsburg disrupt blog green juice. Vice blog polaroid health goth celiac, +1 before they sold out. Yr thundercats waistcoat +1 mixtape poke mlkshk. Typewriter slow-carb wayfarers affogato enamel pin gentrify PBR&B. Squid lo-fi plaid activated charcoal.")

Post.create(user_id: andrew.id, city_id: new_york.id, title: "The Big Apple", body: "This is meaningless that jerk from finance really threw me under the bus. Root-and-branch review. Shoot me an email drink from the firehose, yet strategic fit, so punter yet drink from the firehose, so turd polishing, for shotgun approach. Quick-win shotgun approach this is meaningless or work and on-brand but completeley fresh. Deploy due diligence, for Q1, nor paddle on both sides, or drink from the firehose. Can we align on lunch orders put in in a deck for our standup today. It just needs more cowbell it's a simple lift and shift job pig in a python, nor win-win-win wheelhouse, for core competencies. Going forward not the long pole in my tent. Enough to wash your face good optics. High performance keywords new economy.")

Post.create(user_id: andrew.id, city_id: new_york.id, title: "New York, New York", body: "Thought shower race without a finish line high performance keywords. Root-and-branch review organic growth, and powerPointless, and low-hanging fruit. Gain traction pro-sumer software, so we are running out of runway so curate price point. I just wanted to give you a heads-up cross-pollination hard stop, nor we need a paradigm shift, game plan. On this journey synergestic actionables or waste of resources value prop drill down. Work. Let's unpack that later not a hill to die on. Deliverables work flows , or diversify kpis. Translating our vision of having a market leading platfrom marketing computer development html roi feedback team website, UX, but win-win, yet criticality old boys club. Cross-pollination move the needle, reach out.")


Post.create(user_id: dan.id, city_id: new_orleans.id, title: "Thinking quick in nawlins", body: "if you ain't from here don't move here")

Post.create(user_id: jordan.id, city_id: atlanta.id, title: "Hotlanta in pajamas", body: "self explanitory")

Post.create(user_id: dre.id, city_id: london.id, title: "put what you want there its fine", body: "not as cool as I thought it was")