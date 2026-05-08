import java.util.Scanner;

class Question {
    String codeSnippet;
    String[] options;
    int correctAnswer;
    String explanation;

    Question(String codeSnippet, String[] options, int correctAnswer, String explanation) {
        this.codeSnippet = codeSnippet;
        this.options = options;
        this.correctAnswer = correctAnswer;
        this.explanation = explanation;
    }
}

public class app {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.println("======================================");
        System.out.println(" BugFinder AI: CodeQuest");
        System.out.println(" An Intelligent Debugging Game");
        System.out.println("======================================");

        System.out.print("Enter your name: ");
        String playerName = scanner.nextLine();

        Question[] questions = createQuestions();
        int score = 0;

        for (int i = 0; i < questions.length; i++) {
            Question q = questions[i];

            System.out.println("\n--------------------------------------");
            System.out.println("Level " + (i + 1));
            System.out.println("--------------------------------------");

            System.out.println("Find the bug in this code:\n");
            System.out.println(q.codeSnippet);

            System.out.println("\nChoose the correct bug:");

            for (int j = 0; j < q.options.length; j++) {
                System.out.println((j + 1) + ". " + q.options[j]);
            }

            System.out.print("\nYour answer: ");
            int userAnswer = scanner.nextInt();

            if (userAnswer == q.correctAnswer) {
                System.out.println("Correct answer!");
                score += 10;
            } else {
                System.out.println("Wrong answer.");
                System.out.println("Correct answer: " + q.options[q.correctAnswer - 1]);
            }

            System.out.println("AI Explanation: " + q.explanation);
        }

        System.out.println("\n======================================");
        System.out.println("Game Over");
        System.out.println("Player: " + playerName);
        System.out.println("Final Score: " + score + "/" + (questions.length * 10));
        System.out.println("======================================");

        if (score == questions.length * 10) {
            System.out.println("Excellent! You are a Debugging Champion.");
        } else if (score >= 20) {
            System.out.println("Good job! Keep practicing debugging.");
        } else {
            System.out.println("Try again and improve your bug-finding skills.");
        }

        scanner.close();
    }

    public static Question[] createQuestions() {

        Question q1 = new Question(
                "public class Test {\n" +
                "    public static void main(String[] args) {\n" +
                "        int a = 10\n" +
                "        System.out.println(a);\n" +
                "    }\n" +
                "}",
                new String[]{
                        "Missing semicolon",
                        "Wrong class name",
                        "Array index error",
                        "Infinite loop"
                },
                1,
                "The statement int a = 10 is missing a semicolon at the end."
        );

        Question q2 = new Question(
                "public class Test {\n" +
                "    public static void main(String[] args) {\n" +
                "        int[] nums = {1, 2, 3};\n" +
                "        System.out.println(nums[5]);\n" +
                "    }\n" +
                "}",
                new String[]{
                        "Syntax error",
                        "Array index out of bounds",
                        "Missing import",
                        "Wrong data type"
                },
                2,
                "The array has only 3 elements, so index 5 is invalid."
        );

        Question q3 = new Question(
                "public class Test {\n" +
                "    public static void main(String[] args) {\n" +
                "        int i = 0;\n" +
                "        while(i < 5) {\n" +
                "            System.out.println(i);\n" +
                "        }\n" +
                "    }\n" +
                "}",
                new String[]{
                        "Missing increment",
                        "Wrong variable declaration",
                        "Missing class",
                        "Invalid print statement"
                },
                1,
                "The value of i is never increased, so the loop becomes infinite."
        );

        Question q4 = new Question(
                "public class Test {\n" +
                "    public static void main(String[] args) {\n" +
                "        String name = null;\n" +
                "        System.out.println(name.length());\n" +
                "    }\n" +
                "}",
                new String[]{
                        "Null pointer error",
                        "Missing semicolon",
                        "Wrong loop condition",
                        "Invalid array size"
                },
                1,
                "The variable name is null, so calling length() on it causes a NullPointerException."
        );

        Question q5 = new Question(
                "public class Test {\n" +
                "    public static void main(String[] args) {\n" +
                "        int age = \"20\";\n" +
                "        System.out.println(age);\n" +
                "    }\n" +
                "}",
                new String[]{
                        "Infinite loop",
                        "Data type mismatch",
                        "Missing main method",
                        "Array error"
                },
                2,
                "The value \"20\" is a String, but the variable age is declared as int."
        );

        return new Question[]{q1, q2, q3, q4, q5};
    }
}