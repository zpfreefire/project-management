package basic.arithmetic;

/**
 * 有一对兔子，从出生后第三个月起每个月都生一对兔子，小兔子长到第三个月后每个月又生一对兔子，
 * 假如兔子都不死，问每个月的兔子总数是多少？
 * @author YH
 *
 */
public class FibonacciSequence {
	public static void main(String[] args) {
		System.out.println("第1个月的兔子对数是：1");
		System.out.println("第2个月的兔子总数是:1");
		int f1 = 1, f2 = 1,f, M=24;
		for(int i=3;i<=24;i++){
			f= f2;
			f2 = f1+f2;
			f1 = f;
			System.out.println("第"+i+"个月的兔子对数是："+f2);
		}
	}
}
