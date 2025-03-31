package Algo_0329;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.Map;
import java.util.StringTokenizer;

public class 비밀번호찾기 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine(), " ");

        int N = Integer.parseInt(st.nextToken()), M = Integer.parseInt(st.nextToken());

        Map<String, String> site = new HashMap<>();

        for(int n = 0; n < N; n++){
            st = new StringTokenizer(br.readLine(), " ");

            String url = st.nextToken(), id = st.nextToken();

            site.put(url, id);
        }

        StringBuilder sb = new StringBuilder();
        for(int m = 0; m < M; m++){
            String url = br.readLine();

            sb.append(site.get(url))
              .append("\n");
        }

        System.out.print(sb);
    }
}
