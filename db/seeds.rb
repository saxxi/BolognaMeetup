user = User.create email: 'adit@demo.com', name: 'Adit'

animals = Topic.create name: 'Animals'
alligators = Topic.create name: 'Alligators'
airplanes = Topic.create name: 'Airplanes'
banking = Topic.create name: 'Banking'
cats = Topic.create name: 'Cats'
parks = Topic.create name: 'Parks'
concert = Topic.create name: 'Concert'

environment = Topic.new name: 'Environment'
billie = Topic.new name: 'Billie'

def event_with_default_attrs(attrs = {})
  date1 = Time.parse("2015-10-16 14:40:34")
  date2 = Time.parse("2015-11-20 16:20:23")

  rand_time = Time.at((date2.to_f - date1.to_f)*rand + date1.to_f)
  end_event = rand_time + rand(6).hours + rand(60).minutes

  {
    evt_date: Date.strptime(rand_time.to_s, '%Y-%m-%d'),
    start_time: "#{rand_time.hour}:#{rand_time.min}",
    end_time: "#{end_event.hour}:#{end_event.min}",
  }.merge(attrs)
end

Event.create event_with_default_attrs(
  place: 'Home', name: "Save the animal",
  topics: [animals, environment]
)
Event.create event_with_default_attrs(
  place: 'Home', name: "We love animals",
  topics: [animals]
)
Event.create event_with_default_attrs(
  place: 'Home', name: "We love cats",
  topics: [animals, cats]
)
Event.create event_with_default_attrs(
  place: 'Home', name: "We can't live with alligators",
  topics: [animals, alligators]
)
Event.create event_with_default_attrs(
  place: 'Home', name: "We can't live without alligators",
  topics: [animals, alligators]
)
Event.create event_with_default_attrs(
  place: 'Bologna', name: "Cats in concert",
  topics: [parks, concert, cats]
)
Event.create event_with_default_attrs(
  place: 'Bologna', name: "Billie in concert",
  topics: [parks, concert, billie]
)
