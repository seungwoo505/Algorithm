package Algo_0404;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class 잃어버린괄호 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String[] nums = br.readLine().split("-");
        int answer = 0;
        for(String num : nums[0].split("\\+")){
            answer += Integer.parseInt(num);
        }

        for(int i = 1; i < nums.length; i++){
            int sum = 0;
            for(String num : nums[i].split("\\+")){
                sum += Integer.parseInt(num);
            }

            answer -= sum;
        }

        System.out.println(answer);
    }
}
