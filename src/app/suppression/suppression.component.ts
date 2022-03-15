import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-suppression',
  templateUrl: './suppression.component.html',
  styleUrls: ['./suppression.component.css']
})
export class SuppressionComponent implements OnInit {

  deletePokemon ="";

  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiNmIxODZlYWVhYjhmNzY2NmE2MDdjYWRkMmQzMGUwMzFlMjczNzQ4Y2I4ZDE2NjY4YzQwZDUxODgzYTE2NDQ1MTEzMTZiNGMwZmIyNzUzZWIiLCJpYXQiOjE2NDczMzUwMDUsIm5iZiI6MTY0NzMzNTAwNSwiZXhwIjoxNjc4ODcxMDA1LCJzdWIiOiI1Iiwic2NvcGVzIjpbXX0.lTSBf96rReW_ijmkG3tkV6kZbT39M5JFQNGdp2lNHjuLyumfNcEFcOvjZ847M1pZbOHdQrHdRZuOyeOek1wmmBVsLe0juqD8emad8sadUowAWeBnPAilzmRkiggz8HElleLtNQy6GzwbHbdWUP2hYUEF_XKkLZJM6Eb1mkzE6gHYIh_e5ouBYEwxUWO5toXKju5Cw0tbWBSdE3OoiJuVRfM9-JiNiXrzlK4P8g1rlw5xK8Z4woloFH_dseEEtYuXgdTDJXHsOf-S3Wi-QtvDUJvVw_dal0RFW-7MH73nS5Ry7nUJGIJIuqzaCXqYxo_OSpyIwX0gKYncuRzsAMcu-aPOR8nIQmZs-WUu5539Qf2B21pNOGosBz6xT-xfX9jePlLYLOzfPpDwN4jRgxmtmyT3spY9sEuBKBjM0uv6tSc4xiNlnXeeHIklrGFKBtH3Ru9Ad5BcTU4n7lzlFfqjX3SgbrgAxJNffBN5nFy3MXVIounfZVKbXAlAcuwsDddBD37ayZJW3OdpaCGfwG_eooPwRqM-niFDu4r2umWgB1YvBlAx9c3U9IfeCXb5TxdDnxR62MXd7ImHo50WrR9jFcyoW-O3sS5ibELrJ-gR-ZmTBx0wPZ8APdj2sHOdjO-pCoUpio3iDBG9X5IiPxb_b00OWP1MZ_5HDhV9Hx5uuwk'
    })
  };

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  del(){
    let lachaine = "https://pure-stream-21702.herokuapp.com/api/pokemon/"+this.deletePokemon;
    this.http.delete(lachaine, this.httpOptions)
    .subscribe(() => {
      console.log("OK");
    });
  }

}
