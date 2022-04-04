class Person
  def initialize(name)
    personal_name = name
  end

  def greeting(name)
    personal_name = name
    "My name is #{personal_name}"
  end
end

person = Person.new("")
puts person.greeting('Taro')