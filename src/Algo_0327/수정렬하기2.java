package Algo_0327;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class 수정렬하기2 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());
        int[] list = new int[N];

        for(int n = 0; n < N; n++){
            list[n] = Integer.parseInt(br.readLine());
        }

        Arrays.sort(list);

        StringBuilder sb = new StringBuilder();

        for(int i : list){
            sb.append(i)
              .append("\n");
        }

        System.out.print(sb);
    }
}
