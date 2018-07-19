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


Post.create(user_id: andrew.id, city_id: new_york.id, title: "Unique New York", body: "new york is pretty cool, ya know?")

Post.create(user_id: andrew.id, city_id: new_york.id, title: "Unique New York", body: "new york is pretty cool, ya know?")

Post.create(user_id: andrew.id, city_id: new_york.id, title: "Unique New York", body: "new york is pretty cool, ya know?")

Post.create(user_id: andrew.id, city_id: new_york.id, title: "Unique New York", body: "new york is pretty cool, ya know?")

Post.create(user_id: andrew.id, city_id: new_york.id, title: "Unique New York", body: "new york is pretty cool, ya know?")

Post.create(user_id: andrew.id, city_id: new_york.id, title: "Unique New York", body: "new york is pretty cool, ya know?")

Post.create(user_id: andrew.id, city_id: new_york.id, title: "Unique New York", body: "new york is pretty cool, ya know?")

Post.create(user_id: andrew.id, city_id: new_york.id, title: "Unique New York", body: "new york is pretty cool, ya know?")

Post.create(user_id: andrew.id, city_id: new_york.id, title: "Unique New York", body: "new york is pretty cool, ya know?")

Post.create(user_id: dan.id, city_id: new_orleans.id, title: "Thinking quick in nawlins", body: "if you ain't from here don't move here")

Post.create(user_id: jordan.id, city_id: atlanta.id, title: "Hotlanta in pajamas", body: "self explanitory")

Post.create(user_id: dre.id, city_id: london.id, title: "put what you want there its fine", body: "not as cool as I thought it was")