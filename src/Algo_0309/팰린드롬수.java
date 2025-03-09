import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class 팰린드롬수{
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();

        String nums = "";
        while(!nums.equals("0")){
            nums = br.readLine();
            
            if(nums.equals("0")) break;
            boolean peleans = true;
            for(int i = 0; i < nums.length() / 2; i++){
                if(nums.charAt(i) != nums.charAt(nums.length() - 1 - i)){
                    sb.append("no")
                      .append("\n");
                    peleans = false;
                    break;
                }
            }

            if(peleans){
                sb.append("yes")
                  .append("\n");
            }

        }

        System.out.print(sb);
    }
}