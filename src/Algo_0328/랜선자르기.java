package Algo_0328;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class 랜선자르기 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine(), " ");

        int K = Integer.parseInt(st.nextToken()), N = Integer.parseInt(st.nextToken());

        int[] line = new int[K];

        for(int k = 0; k < K; k++){
            line[k] = Integer.parseInt(br.readLine());
        }

        long min = 1, max = Arrays.stream(line).max().getAsInt();

        int answer = 0;

        while(min <= max){
            long mid = (min + max) / 2;
            long count = 0;

            for(int l : line){
                count += l / mid;
            }

            if(count < N){
                max = mid - 1;
            } else {
                answer = (int)mid;
                min = mid + 1;
            }
        }

        System.out.println(answer);
    }
}
