---
description: What is the key difference between Extends and Implements
slug: java-fundamentals-extends-implements
public: true
layout: ../../layouts/BlogPost.astro
title: 'Java:  Extends vs Implements'
createdAt: 1669126606560
updatedAt: 1669128025097
tags:
  - Java
heroImage: /posts/java-fundamentals-extends-implements_thumbnail.png
---

Hello, There! Welcome back, I hope you are doing well. It's been a while since I've appeared here, but I'll post more often about what I've been studying and developing.

Today I come to talk about Java, and a subject that I was in doubt and decided to research. We will talk about Extends and Implements and what is the fundamental difference between these concepts.

## Difference between Extends and Implements

Extends and Implements are reserved keywords in Java which we use to inherit the features of an already existing parent block in the newly created child block.

They are used to implement different concepts in Java. We will learn what is Java extends keyword and what is Java implements keyword with examples.

### What is extends in Java?
* The extends keyword in Java is useful when we want to inherit the properties and methods of a parent class in our child class.
* This extends keyword establishes the inheritance relationship between two classes.
* We use it while creating a derived class from the parent class or creating a subclass form the superclass.
* The rule is that a class can extend a maximum of one class only.
* When a class extends another class, it can override the methods defined in a superclass.
* We also use the extends keyword when we want an interface to extend or inherit another interface.

**Code to understand the extends keyword in Java**
```java
package com.rafaelmgr12.extendsvsimplements;

//Parent Class
class Country
{
    String name = "India";
    public void display()
    {
        System.out.println("This is my country India");
    }
}
//child class extends the parent class
class City extends Country
{   
    // defining additional properties to the derived class
    String state = “Rajasthan”;
    String city = “Jaipur”;
}
public class ExtendsDemo
{
    public static void main(String args[])
    {
        City obj=new City();
        obj.display();
        System.out.println("Name of the city is: " + obj.name);
        System.out.println("City is present in " + obj.state + “state”);
    }
}
```
#### Output
```
This is my country India
Name of the city is: Jaipur
City is present in Rajasthan state
```
### What is Implements in Java?
* We use the keyword implements while implementing an interface.
* A class can implement an interface using the implements keyword.
* An interface is an **abstract type in Java** that contains a collection of abstract methods. We cannot instantiate an interface that is, we can not create objects from an interface.
* When a class implements an interface, it has to define all the methods that are present inside the interface by providing the implementation of each of the methods.
* If the class that implements an interface, does not define or does not contains implementation of all the methods of the interface, then we must declare it as abstract. Otherwise, the compiler will give an error.
* Java does not support multiple inheritances, but we can implement multiple inheritance in our code by using multiple interfaces in Java.
* An interface can never implement another interface. The reason is that if the interface will implement another interface then it has to define all the methods of the interface which it is implementing but the interface can not have any concrete methods, therefore, an interface can not implement another interface in Java.

**Code to understand the extends keyword in Java**
```java
package com.rafaelmgr12.extendsvsimplements;
//Creating an interface
interface MyInterface
{
  //Declaring abstract methods inside it
  void displayString(String s);
  void showNumber(int i);
}
//Implementing the interface using the implements keyword
public class MyClass implements MyInterface
{
  //Implementing all the methods declared in the interface
  public void displayString(String s)
  {
    System.out.println("The string value is: " +s);
  }
  public void showNumber(int i)
  {
    System.out.println("The integer value is: " +i);
  }
  public static void main(String args[]) 
  {
    MyClass obj = new MyClass();
    obj.displayString("TechVidvan");
    obj.showNumber(20);
  }
}

```
#### Output
```
The string value is: TechVidvan
The integer value is: 20
```

### Example of Multiple Interfaces
Now we will see an example in which one class implements more than one interface at the same time and therefore establishes multiple inheritances in Java. We will create 3 interfaces: WWalkable, Swimmable, and Talkable and one class HumanBeing that implements all the 3 interfaces.

#### 1. interface: Waklable.java
```java
  package com.rafaelmgr12.extendsvsimplements;
  
  public interface Walkable{
    public void walk();
  }
```

#### 3. interface: Talkable.java
```java 
package com.techvidvan.extendsvsimplements;
public interface Talkable 
{
  public void talk();
  }
```

#### 4. Class: HumanBeing.java
```java
package com.techvidvan.extendsvsimplements;
\\To implement multiple interfaces we must use commas to separate them
public class HumanBeing  implements Walkable, Swimmable, Talkable
{
  @Override
  public void walk()
  {
    System.out.println("I can walk");
  }
  @Override
  public void swim()
  {
    System.out.println("I can swim");
  }
  @Override
  public void talk()
  {
    System.out.println("I can talk");
  }
  public static void main(String args[])
  {
    HumanBeing human= new HumanBeing();
    human.walk();
    human.swim();
    human.talk();
  }
}
```

#### Output
```
I can walk
I can swim
I can talk
```

### Difference between Extends and  Implements in Java

We have seen the examples of both keywords, let us now see java extends vs implements in detail:

| Comparison features | Extends                                                                                                                                            | Implements                                                                                                                                                                       |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Implementation      | The keyword extends is used when a class wants to inherit all the properties from another class or an interface that wants to inherit an interface | We use the implements keyword when we want a class to implement an interface.                                                                                                    |
| Associated with     | It is associated with Inheritance                                                                                                                  | It is associated with Abstraction                                                                                                                                                |
| Method              | The child class that extends a parent class may or may not override all the methods present in the parent class.                                   | The class that implements an interface must define or provide the implementation of all the methods declared in the interface, or else the class should be declared as abstract. |
| Class               | A subclass or more than one subclass can extend only one parent class at the same time.                                                            | A class can implement one or more than one interface at the same time.                                                                                                           |
| Interface           | An interface can extend any number of interfaces.                                                                                                  | An interface can never implement any other interface.                                                                                                                            |
                                                                                                                                                            

## Summary
So in conclusion, we come to the end of the article of difference between extends and implements in java. We went through the major differences between these keywords. Both of them directly or indirectly use the concept of inheritance in Java.

But, we can conclude that implementing an interface provides more flexibility than extending a class as we can extend a single class but we can implement multiple inheritances in Java.

Hope, after reading this article, you might have finally understood extends vs implements keyword in Java.