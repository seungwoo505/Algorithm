package Algo_0329;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class ATM {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());
        int[] person = new int[N];
        int n = 0;
        for(String s : br.readLine().split(" ")){
            person[n++] = Integer.parseInt(s);
        }
        Arrays.sort(person);
        int count = 0;
        int time = 0;

        for(int p : person){
            time += p;
            count += time;
        }

        System.out.println(count);
    }
}
