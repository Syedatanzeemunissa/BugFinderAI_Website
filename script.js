const questionBank = [
    {
        code: `public class Test {
    public static void main(String[] args) {
        int a = 10
        System.out.println(a);
    }
}`,
        options: ["Missing semicolon", "Wrong class name", "Array index error", "Infinite loop"],
        answer: 0,
        explanation: "The statement int a = 10 is missing a semicolon at the end."
    },
    {
        code: `public class Test {
    public static void main(String[] args) {
        int[] nums = {1, 2, 3};
        System.out.println(nums[5]);
    }
}`,
        options: ["Syntax error", "Array index out of bounds", "Missing import", "Wrong data type"],
        answer: 1,
        explanation: "The array has only 3 elements, so index 5 is invalid."
    },
    {
        code: `public class Test {
    public static void main(String[] args) {
        int i = 0;
        while(i < 5) {
            System.out.println(i);
        }
    }
}`,
        options: ["Missing increment", "Wrong variable declaration", "Missing class", "Invalid print statement"],
        answer: 0,
        explanation: "The value of i is never increased, so the loop becomes infinite."
    },
    {
        code: `public class Test {
    public static void main(String[] args) {
        String name = null;
        System.out.println(name.length());
    }
}`,
        options: ["Null pointer error", "Missing semicolon", "Wrong loop condition", "Invalid array size"],
        answer: 0,
        explanation: "The variable name is null, so calling length() causes a NullPointerException."
    },
    {
        code: `public class Test {
    public static void main(String[] args) {
        int age = "20";
        System.out.println(age);
    }
}`,
        options: ["Infinite loop", "Data type mismatch", "Missing main method", "Array error"],
        answer: 1,
        explanation: "The value \"20\" is a String, but age is declared as an int."
    },
    {
        code: `public class Test {
    public static void main(String[] args) {
        for(int i = 0; i < 5; i--) {
            System.out.println(i);
        }
    }
}`,
        options: ["Infinite loop", "Missing import", "Wrong class name", "String error"],
        answer: 0,
        explanation: "The loop uses i--, so i keeps decreasing and remains less than 5."
    },
    {
        code: `public class Test {
    public static void main(String[] args) {
        int x = 10;
        int y = 0;
        System.out.println(x / y);
    }
}`,
        options: ["Array error", "Arithmetic exception", "Missing semicolon", "Invalid class"],
        answer: 1,
        explanation: "Dividing an integer by zero causes an ArithmeticException."
    },
    {
        code: `public class Test {
    public static void main(String[] args) {
        String city = "Bangalore";
        System.out.println(citi);
    }
}`,
        options: ["Wrong variable name", "Missing loop", "Array index error", "Constructor error"],
        answer: 0,
        explanation: "The variable is declared as city, but the code tries to print citi."
    },
    {
        code: `public class Test {
    public static void main(String[] args) {
        int marks = 75;
        if(marks = 75) {
            System.out.println("Pass");
        }
    }
}`,
        options: ["Assignment used instead of comparison", "Missing array", "Wrong package", "Null pointer error"],
        answer: 0,
        explanation: "Java uses == for comparison. The code incorrectly uses = inside the if condition."
    },
    {
        code: `public class Test {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
    }
}`,
        options: ["Missing import statement", "Wrong data type", "Infinite loop", "Wrong method name"],
        answer: 0,
        explanation: "Scanner needs import java.util.Scanner; before the class."
    },
    {
        code: `public class Test {
    public static void main(String[] args) {
        int[] arr = new int[-5];
    }
}`,
        options: ["Negative array size error", "Wrong class name", "Missing semicolon", "Invalid print statement"],
        answer: 0,
        explanation: "Array size cannot be negative in Java."
    },
    {
        code: `public class Test {
    public static void main(String[] args) {
        String text = "Hello";
        text.charAt(10);
    }
}`,
        options: ["String index out of bounds", "Missing class", "Wrong loop", "Invalid package"],
        answer: 0,
        explanation: "The string has only 5 characters, so index 10 is invalid."
    },
    {
        code: `public class Test {
    public static void main(String[] args) {
        int number;
        System.out.println(number);
    }
}`,
        options: ["Variable not initialized", "Wrong class name", "Array error", "Missing package"],
        answer: 0,
        explanation: "Local variables in Java must be initialized before use."
    },
    {
        code: `public class Test {
    public static void main(String[] args) {
        boolean result = true;
        if(result == "true") {
            System.out.println("Yes");
        }
    }
}`,
        options: ["Boolean compared with String", "Missing semicolon", "Wrong loop", "Array size error"],
        answer: 0,
        explanation: "A boolean value cannot be compared with a String value."
    },
    {
        code: `public class Test {
    public static void main(String[] args) {
        int x = 5;
        if(x > 3)
            System.out.println("Greater");
            System.out.println("Done");
    }
}`,
        options: ["Missing braces causing logic error", "Wrong data type", "Missing class", "Null pointer error"],
        answer: 0,
        explanation: "Without braces, only the first statement belongs to the if block."
    },
    {
        code: `public class Test {
    public static void main(String[] args) {
        String name = "Ali";
        name = 100;
    }
}`,
        options: ["Data type mismatch", "Missing import", "Wrong array index", "Infinite loop"],
        answer: 0,
        explanation: "A String variable cannot store an integer value."
    },
    {
        code: `public class Test {
    public static void main(String[] args) {
        int a = 5;
        int b = 10;
        System.out.println(a + c);
    }
}`,
        options: ["Undeclared variable", "Missing main method", "Wrong class name", "Array error"],
        answer: 0,
        explanation: "Variable c is used but never declared."
    },
    {
        code: `public class Test {
    public static void main(String[] args) {
        int[] marks = {90, 80, 70};
        System.out.println(marks.length());
    }
}`,
        options: ["length used incorrectly", "Missing semicolon", "Wrong class name", "Infinite loop"],
        answer: 0,
        explanation: "For arrays, length is a property, not a method. Use marks.length."
    },
    {
        code: `public class Test {
    public static void main(String[] args) {
        String name = "Java";
        System.out.println(name.length);
    }
}`,
        options: ["String length used incorrectly", "Array index error", "Missing import", "Wrong package"],
        answer: 0,
        explanation: "For String, length is a method. Use name.length()."
    },
    {
        code: `public class Test {
    public static void main(String[] args) {
        int x = 10;
        int y = 20;
        if(x > y);
        {
            System.out.println("X is greater");
        }
    }
}`,
        options: ["Unwanted semicolon after if", "Missing variable", "Wrong method", "Array exception"],
        answer: 0,
        explanation: "The semicolon after if ends the if statement early, causing a logic error."
    },
    {
        code: `public class Test {
    public static void main(String[] args) {
        for(int i = 1; i <= 5;) {
            System.out.println(i);
        }
    }
}`,
        options: ["Missing update statement", "Wrong data type", "Missing import", "Invalid class"],
        answer: 0,
        explanation: "The loop variable i is never updated, causing an infinite loop."
    },
    {
        code: `public class Test {
    public static void main(String[] args) {
        int num = Integer.parseInt("abc");
        System.out.println(num);
    }
}`,
        options: ["Number format exception", "Missing semicolon", "Wrong loop", "Array index error"],
        answer: 0,
        explanation: "The text abc cannot be converted into an integer."
    },
    {
        code: `public class Test {
    public static void main(String[] args) {
        int[] values = null;
        System.out.println(values[0]);
    }
}`,
        options: ["Null pointer error", "Wrong class name", "Missing package", "Data type mismatch"],
        answer: 0,
        explanation: "The array reference is null, so accessing values[0] causes a NullPointerException."
    },
    {
        code: `public class Test {
    public static void main(String[] args) {
        double price = 99.99;
        int finalPrice = price;
    }
}`,
        options: ["Possible lossy conversion", "Missing import", "Wrong main method", "Infinite loop"],
        answer: 0,
        explanation: "A double value cannot be directly assigned to an int without casting."
    },
    {
        code: `public class Test {
    public static void main(String[] args) {
        char grade = "A";
        System.out.println(grade);
    }
}`,
        options: ["Wrong quotes for char", "Array error", "Missing loop", "Invalid package"],
        answer: 0,
        explanation: "char values should use single quotes, like 'A', not double quotes."
    },
    {
        code: `public class Test {
    public static void main(String[] args) {
        String password = "admin";
        if(password == "admin") {
            System.out.println("Login");
        }
    }
}`,
        options: ["String compared using ==", "Missing semicolon", "Wrong array size", "Null pointer error"],
        answer: 0,
        explanation: "Strings should usually be compared using .equals() instead of ==."
    },
    {
        code: `public class Test {
    public static void main(String[] args) {
        int result = add(5, 10);
        System.out.println(result);
    }
}`,
        options: ["Method not defined", "Wrong class name", "Array error", "Missing package"],
        answer: 0,
        explanation: "The method add() is called but not defined anywhere in the class."
    },
    {
        code: `public class Test {
    public static void main(String[] args) {
        printMessage();
    }

    public void printMessage() {
        System.out.println("Hello");
    }
}`,
        options: ["Non-static method called from static context", "Missing semicolon", "Wrong variable", "Array exception"],
        answer: 0,
        explanation: "main is static, so it cannot directly call a non-static method."
    },
    {
        code: `public class Test {
    public static void main(String[] args) {
        int count = 1;
        while(count <= 3);
        {
            System.out.println(count);
            count++;
        }
    }
}`,
        options: ["Unwanted semicolon after while", "Missing class", "Wrong import", "String error"],
        answer: 0,
        explanation: "The semicolon after while creates an empty loop and causes incorrect behavior."
    },
    {
        code: `public class Test {
    public static void main(String[] args) {
        int[] nums = {10, 20, 30};
        for(int i = 0; i <= nums.length; i++) {
            System.out.println(nums[i]);
        }
    }
}`,
        options: ["Loop condition causes array index error", "Missing package", "Wrong data type", "Invalid class name"],
        answer: 0,
        explanation: "The loop should use i < nums.length, not i <= nums.length."
    },
    {
        code: `public class Test {
    public static void main(String[] args) {
        String s = "Java";
        System.out.println(s.substring(2, 10));
    }
}`,
        options: ["String index out of bounds", "Missing semicolon", "Wrong class", "Infinite loop"],
        answer: 0,
        explanation: "The end index 10 is beyond the length of the string."
    },
    {
        code: `public class Test {
    public static void main(String[] args) {
        int a = 10;
        int b = 20;
        int c = a + b
        System.out.println(c);
    }
}`,
        options: ["Missing semicolon", "Wrong variable name", "Null pointer error", "Wrong import"],
        answer: 0,
        explanation: "The statement int c = a + b is missing a semicolon."
    },
    {
        code: `public class Test {
    public static void main(String[] args) {
        float value = 10.5;
        System.out.println(value);
    }
}`,
        options: ["Float value missing f suffix", "Wrong class name", "Array error", "Missing main"],
        answer: 0,
        explanation: "Decimal values are double by default. Use 10.5f for float."
    },
    {
        code: `public class Test {
    public static void main(String[] args) {
        final int MAX = 100;
        MAX = 200;
    }
}`,
        options: ["Cannot change final variable", "Missing import", "Wrong loop", "Array index error"],
        answer: 0,
        explanation: "A final variable cannot be reassigned after initialization."
    },
    {
        code: `public class Test {
    public static void main(String[] args) {
        int choice = 2;
        switch(choice) {
            case 1:
                System.out.println("One");
            case 2:
                System.out.println("Two");
            case 3:
                System.out.println("Three");
        }
    }
}`,
        options: ["Missing break statements", "Missing semicolon", "Wrong variable", "Null pointer error"],
        answer: 0,
        explanation: "Without break statements, switch cases may fall through to the next cases."
    },
    {
        code: `public class Test {
    public static void main(String[] args) {
        int i = 5;
        do {
            System.out.println(i);
            i++;
        } while(i < 5)
    }
}`,
        options: ["Missing semicolon after do-while", "Wrong class name", "Missing import", "Array error"],
        answer: 0,
        explanation: "A do-while statement must end with a semicolon."
    },
    {
        code: `public class Test {
    public static void main(String[] args) {
        String[] names = {"A", "B"};
        System.out.println(names[2]);
    }
}`,
        options: ["Array index out of bounds", "Missing semicolon", "Wrong method", "Invalid package"],
        answer: 0,
        explanation: "The array has indexes 0 and 1 only. Index 2 is invalid."
    },
    {
        code: `public class Test {
    public static void main(String[] args) {
        int a = 5;
        int b = 2;
        double result = a / b;
        System.out.println(result);
    }
}`,
        options: ["Integer division logic error", "Missing class", "Wrong package", "Null pointer"],
        answer: 0,
        explanation: "Since both a and b are integers, a / b performs integer division before storing in double."
    },
    {
        code: `public class Test {
    public static void main(String[] args) {
        String name;
        if(name.equals("Ali")) {
            System.out.println("Hello");
        }
    }
}`,
        options: ["Variable not initialized", "Wrong class", "Array error", "Missing loop"],
        answer: 0,
        explanation: "The local variable name is used before initialization."
    },
    {
        code: `public class Test {
    public static void main(String[] args) {
        int marks = 85;
        if(marks > 90) {
            System.out.println("A");
        } else if(marks > 80) {
            System.out.println("B");
        } else if(marks > 70) {
            System.out.println("C");
        } else {
            System.out.println("Fail");
        }
    }
}`,
        options: ["No bug", "Missing semicolon", "Wrong class name", "Array exception"],
        answer: 0,
        explanation: "This code is correct. It prints B for marks 85."
    },
    {
        code: `public class Test {
    public static void main(String[] args) {
        int number = 10;
        System.out.println(Number);
    }
}`,
        options: ["Java is case-sensitive", "Missing import", "Wrong array", "Infinite loop"],
        answer: 0,
        explanation: "number and Number are different names in Java because Java is case-sensitive."
    },
    {
        code: `public class Test {
    public static void main(String[] args) {
        String msg = "Hello;
        System.out.println(msg);
    }
}`,
        options: ["Unclosed string literal", "Wrong array index", "Null pointer error", "Missing class"],
        answer: 0,
        explanation: "The string starts with a double quote but does not end with one."
    },
    {
        code: `public class Test {
    public static void main(String[] args) {
        int x = 10;
        if(x > 5 {
            System.out.println("Yes");
        }
    }
}`,
        options: ["Missing closing parenthesis", "Wrong data type", "Array error", "Missing package"],
        answer: 0,
        explanation: "The if condition is missing a closing parenthesis before the opening brace."
    },
    {
        code: `public class Test {
    public static void main(String[] args) {
        int x = 10;
        System.out.println(x++);
        System.out.println(x);
    }
}`,
        options: ["No bug", "Missing semicolon", "Wrong import", "String error"],
        answer: 0,
        explanation: "This code is correct. x++ prints the current value first and then increments it."
    },
    {
        code: `public class Test {
    public static void main(String[] args) {
        int x = 10;
        System.out.println(++x);
    }
}`,
        options: ["No bug", "Array index error", "Missing class", "Wrong variable"],
        answer: 0,
        explanation: "This code is correct. ++x increments first and then prints the value."
    },
    {
        code: `public class Test {
    public static void main(String[] args) {
        int a = 5, b = 10;
        if(a < b) {
            System.out.println("A is smaller");
        }
}`,
        options: ["Missing closing brace for class", "Wrong variable", "Array error", "Missing package"],
        answer: 0,
        explanation: "The class closing brace is missing at the end."
    },
    {
        code: `public class Test {
    public static void main(String[] args) {
        public int x = 10;
        System.out.println(x);
    }
}`,
        options: ["Access modifier not allowed for local variable", "Wrong class name", "Array exception", "Missing import"],
        answer: 0,
        explanation: "Local variables inside methods cannot use access modifiers like public."
    },
    {
        code: `public class Test {
    public static void main(String[] args) {
        int class = 10;
        System.out.println(class);
    }
}`,
        options: ["Reserved keyword used as variable name", "Wrong loop", "Missing package", "Array error"],
        answer: 0,
        explanation: "class is a reserved keyword in Java and cannot be used as a variable name."
    },
    {
        code: `public class Test {
    public static void main(String[] args) {
        String name = "Ali";
        System.out.println(name.toUppercase());
    }
}`,
        options: ["Wrong method name", "Missing class", "Array index error", "Infinite loop"],
        answer: 0,
        explanation: "The correct String method is toUpperCase(), with capital C."
    },
    {
        code: `public class Test {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3};
        arr[0] = "one";
    }
}`,
        options: ["Data type mismatch in array", "Missing semicolon", "Wrong class", "Infinite loop"],
        answer: 0,
        explanation: "An int array can store only integer values, not String values."
    }
];

let questions = [];
let currentQuestion = 0;
let score = 0;
let answered = false;
let totalQuestions = 10;
let player = "Player";

function showPage(pageId) {
    document.getElementById("titlePage").classList.remove("active");
    document.getElementById("gamePage").classList.remove("active");
    document.getElementById("resultPage").classList.remove("active");

    document.getElementById(pageId).classList.add("active");
}

function startGame() {
    const nameInput = document.getElementById("playerName").value.trim();

    if (nameInput !== "") {
        player = nameInput;
    }

    document.getElementById("displayName").innerText = player;

    questions = shuffleQuestions(questionBank).slice(0, totalQuestions);
    currentQuestion = 0;
    score = 0;
    answered = false;

    document.getElementById("score").innerText = score;

    showPage("gamePage");
    loadQuestion();
}

function shuffleQuestions(array) {
    let copiedArray = [...array];

    for (let i = copiedArray.length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * (i + 1));
        let temp = copiedArray[i];
        copiedArray[i] = copiedArray[randomIndex];
        copiedArray[randomIndex] = temp;
    }

    return copiedArray;
}

function loadQuestion() {
    answered = false;

    document.getElementById("levelTitle").innerText = "Level " + (currentQuestion + 1);
    document.getElementById("codeBox").innerText = questions[currentQuestion].code;
    document.getElementById("result").innerText = "";
    document.getElementById("explanation").innerText = "";

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    questions[currentQuestion].options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.className = "option-btn";
        button.onclick = () => checkAnswer(index, button);
        optionsDiv.appendChild(button);
    });

    document.getElementById("nextBtn").style.display = "none";
}

function checkAnswer(selectedIndex, button) {
    if (answered) return;

    answered = true;

    const correctIndex = questions[currentQuestion].answer;
    const allButtons = document.querySelectorAll(".option-btn");

    if (selectedIndex === correctIndex) {
        button.classList.add("correct");
        document.getElementById("result").innerText = "Correct Answer!";
        score += 10;
        document.getElementById("score").innerText = score;
    } else {
        button.classList.add("wrong");
        allButtons[correctIndex].classList.add("correct");
        document.getElementById("result").innerText = "Wrong Answer!";
    }

    document.getElementById("explanation").innerText =
        "AI Explanation: " + questions[currentQuestion].explanation;

    document.getElementById("nextBtn").style.display = "inline-block";
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResultPage();
    }
}

function showResultPage() {
    document.getElementById("finalPlayerName").innerText = player;
    document.getElementById("finalScore").innerText = score + "/" + (questions.length * 10);
    document.getElementById("finalMessage").innerText = getMessage();

    showPage("resultPage");
}

function getMessage() {
    if (score === questions.length * 10) {
        return "Excellent! You are a Debugging Champion.";
    } else if (score >= 70) {
        return "Great job! You have strong debugging skills.";
    } else if (score >= 40) {
        return "Good attempt! Keep practicing debugging.";
    } else {
        return "Try again and improve your bug-finding skills.";
    }
}

function restartGame() {
    document.getElementById("playerName").value = "";
    showPage("titlePage");
}