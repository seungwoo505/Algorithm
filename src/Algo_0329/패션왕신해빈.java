package Algo_0329;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.StringTokenizer;

public class 패션왕신해빈 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(br.readLine());

        StringBuilder sb = new StringBuilder();

        for(int t = 1; t <= T; t++){
            int N = Integer.parseInt(br.readLine());

            Map<String, ArrayList<String>> map = new HashMap<>();

            for(int n = 1; n <= N; n++){
                StringTokenizer st = new StringTokenizer(br.readLine(), " ");
                String name = st.nextToken(), type = st.nextToken();


                ArrayList<String> names = map.getOrDefault(type, new ArrayList<>());

                names.add(name);

                map.put(type, names);
            }

            int count = 1;

            for(String s : map.keySet()){
                count *= map.get(s).size() + 1;
            }

            sb.append(--count)
              .append("\n");
        }

        System.out.print(sb);
    }
}
