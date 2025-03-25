package Algo_0321;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class RangeGCD {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        int[] list = new int[N + 1];
        StringTokenizer st = new StringTokenizer(br.readLine(), " ");
        StringBuilder sb = new StringBuilder();

        for(int n = 1; n <= N; n++){
            list[n] = Integer.parseInt(st.nextToken());
        }

        int Q = Integer.parseInt(br.readLine());

        for(int q = 0; q < Q; q++){
            st = new StringTokenizer(br.readLine(), " ");

            int T = Integer.parseInt(st.nextToken());
            int A = Integer.parseInt(st.nextToken());
            int B = Integer.parseInt(st.nextToken());

            if(T == 0){
                int answer = list[A];
                for(int i = A + 1; i <= B; i++){ // A부터 B까지의 최대 공약수 구하기
                    answer = gcd(list[i], answer);
                }
                sb.append(answer)
                  .append("\n");
            }else{ // 0이 아닐 때
                for(int i = A; i <= B; i++){ // A부터 B까지 T를 더하기
                    list[i] += T;
                }
            }
        }

        System.out.print(sb);
    }

    static int gcd(int a, int b){
        return (b == 0) ? a : gcd(b, a % b);
    }
}