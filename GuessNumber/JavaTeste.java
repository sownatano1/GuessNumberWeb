import java.util.Scanner;

class TesteJava
{	
	public static void main(String[] args)
	{	
		/*
		String name = "Jonathan";
		System.out.println("Seu nome é " + name);

		int firstNumber = 6;
		int secondNumber = 7;
		System.out.print("A soma dos números é " + (firstNumber + secondNumber));
		*/

		/*
		Scanner scanner = new Scanner(System.in);
		System.out.print("Escreva o seu nome: ");
		String name = scanner.nextLine();
		System.out.print("Olá, " + name);
		scanner.close();
		*/
		
		Answers();
	}

	public static void Answers()
	{	
		double correctNumber = Math.random();
		correctNumber = correctNumber * 100;
		correctNumber = Math.round(correctNumber);
		
		while(true)
		{
			Scanner intScan = new Scanner(System.in);
			System.out.println("O número é " + correctNumber);
			System.out.print("Adivinhe o número correto entre 0-100: ");
			int number = intScan.nextInt();

			if (correctNumber == number)
			{
				System.out.print("Acertou!");
				intScan.close();
				break;
			}
			
			else if (correctNumber > number) 
			{
				System.out.println("Errou! O número é mais alto.");
				continue;
			} 
			else
			{
				System.out.println("Errou! O número é mais baixo.");
				continue;
			}
		}
	}
}