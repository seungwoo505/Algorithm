package Algo_0328;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashSet;
import java.util.Set;
import java.util.StringTokenizer;

public class 집합 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());

        Set<Integer> set = new HashSet<>();

        int num;

        StringBuilder sb = new StringBuilder();

        for(int n = 0; n < N; n++){
            StringTokenizer st = new StringTokenizer(br.readLine(), " ");

            String type = st.nextToken();

            switch (type) {
                case "add":
                    num = Integer.parseInt(st.nextToken());
                    set.add(num);
                    break;
                case "remove":
                    num = Integer.parseInt(st.nextToken());
                    set.remove(num);
                    break;
                case "check":
                    num = Integer.parseInt(st.nextToken());
                    sb.append(set.contains(num) ? 1 : 0)
                      .append("\n");
                    break;
                case "toggle":
                    num = Integer.parseInt(st.nextToken());
                    if(set.contains(num)) set.remove(num);
                    else set.add(num);
                    break;
                case "all":
                    set = new HashSet<>();
                    for(int i = 1; i <= 20; i++){
                        set.add(i);
                    }
                    break;
                case "empty":
                    set = new HashSet<>();
                    break;
            }
        }

        System.out.print(sb);
    }
}
