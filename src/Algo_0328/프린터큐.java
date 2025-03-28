package Algo_0328;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class 프린터큐 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(br.readLine());

        StringBuilder sb = new StringBuilder();

        for(int t = 0; t < T; t++){
            StringTokenizer st = new StringTokenizer(br.readLine(), " ");

            int N = Integer.parseInt(st.nextToken()), M = Integer.parseInt(st.nextToken());
            int[] print = new int[N];

            st = new StringTokenizer(br.readLine(), " ");

            for(int n = 0; n < N; n++){
                print[n] = Integer.parseInt(st.nextToken());
            }

            Queue<int[]> queue = new LinkedList<>();

            for(int n = 0; n < N; n++){
                queue.offer(new int[]{print[n], n == M ? 1 : 0});
            }
            Arrays.sort(print);

            for (int i = 0; i < N / 2; i++) {
                int temp = print[i];
                print[i] = print[N - 1 - i];
                print[N - 1 - i] = temp;
            }

            int count = 0;
            boolean c = false;

            for(int i : print){
                if(c) break;
                int size = queue.size();
                while(size <= queue.size()){
                    int[] next = queue.poll();
                    if(next[0] == i) {
                        count++;
                        if(next[1] == 1) c = true;
                        break;
                    } else{
                        queue.offer(next);
                    }
                }
            }
            sb.append(count).append("\n");
        }

        System.out.print(sb);
    }
}
