package Algo_0401;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class 특식배부 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());

        int[] chicken = new int[3];

        StringTokenizer st = new StringTokenizer(br.readLine(), " ");
        for(int i = 0; i < 3; i++){
            chicken[i] = Integer.parseInt(st.nextToken());
        }

        int count = 0;
        
        for(int i = 0; i < 3; i++){
            count += Math.min(N, chicken[i]);
        }

        System.out.println(count);
    }
}
