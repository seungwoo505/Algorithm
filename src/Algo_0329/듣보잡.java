package Algo_0329;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;
import java.util.StringTokenizer;

public class 듣보잡 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine(), " ");

        int N = Integer.parseInt(st.nextToken()), M = Integer.parseInt(st.nextToken());

        Set<String> none = new HashSet<>();
        for(int n = 0; n < N; n++){
            none.add(br.readLine());
        }

        ArrayList<String> answer = new ArrayList<>();

        for(int m = 0; m < M; m++){
            String equal = br.readLine();
            if(none.contains(equal)){
                answer.add(equal);
            }
        }

        StringBuilder sb = new StringBuilder();

        sb.append(answer.size())
          .append("\n");

        answer.sort(null);

        for(String a : answer){
            sb.append(a)
              .append("\n");
        }

        System.out.print(sb);
    }
}
