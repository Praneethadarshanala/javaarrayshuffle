public class PangramChecker {
    public static boolean isPangram(String input) {
        // Convert the input to lowercase to make it case-insensitive
        input = input.toLowerCase();

        // Create a boolean array to mark the presence of each alphabet
        boolean[] alphabetPresent = new boolean[26];

        // Iterate through the characters in the input
        for (int i = 0; i < input.length(); i++) {
            char c = input.charAt(i);

            // Check if the character is an alphabet and mark it as present
            if (c >= 'a' && c <= 'z') {
                alphabetPresent[c - 'a'] = true;
            }
        }

        // Check if all alphabets are present
        for (boolean isPresent : alphabetPresent) {
            if (!isPresent) {
                return false; // At least one alphabet is missing
            }
        }

        return true; // All alphabets are present
    }

    public static void main(String[] args) {
        String input = "The quick brown fox jumps over the lazy dog";
        boolean result = isPangram(input);

        if (result) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }
}
