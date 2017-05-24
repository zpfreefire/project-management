package basic.oop.polymorphic;

class A {
	public String show(D obj){
		return ("A and D");
	}
	
	public String show(A obj){
		return ("A and A");
	}
}

class B extends A {
	public String show(B obj){
		return ("B and B");
	}
	public String show(A obj){
		return ("B and A");
	}
}

class C extends B{
	public String show(C obj){
		return ("C and C");
	}
	public String show(B obj){
		return ("C and B");
	}
}

class D extends B{
	public String show(D obj){
		return ("D and D");
	}
	public String show(B obj){
		return ("D and B");
	}
}

public class Demo{
	public static void main(String[] args) {
		A a1 = new A();
		A a2 = new B();
		B b = new B();
		C c = new C();
		D d = new D();
		System.out.println(a1.show(b));
		System.out.println(a1.show(c));
		System.out.println(a1.show(d));
		System.out.println(a2.show(b));
		System.out.println(a2.show(c));
		System.out.println(a2.show(d));
		System.out.println(b.show(b));
		System.out.println(b.show(c));
		System.out.println(b.show(d));
	}
}

/*A and A
A and A
A and D
B and A
B and A
A and D
B and B
B and B
A and D*/
