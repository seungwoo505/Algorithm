package Algo_0311;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
import java.util.StringTokenizer;

public class 요세푸스문제 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        StringTokenizer st = new StringTokenizer(br.readLine(), " ");

        StringBuilder sb = new StringBuilder();

        sb.append("<");

        int N = Integer.parseInt(st.nextToken()), K = Integer.parseInt(st.nextToken());

        List<Integer> num = new ArrayList<>();

        for(int i = 1; i <= N; i++){
            num.add(i);
        }

        int k = 0;

        for(int i = 0; i < N; i++){
            k = (k + K - 1) % num.size();
            sb.append(num.get(k));

            if(num.size() == 1){
                sb.append(">");
            }else{
                sb.append(", ");
            }

            num.remove(k);
        }

        System.out.println(sb);
    }
}
