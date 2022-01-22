import { Injectable } from '@angular/core';
import { createClient } from 'redis';

@Injectable({
  providedIn: 'root'
})
export class RedisService {

  public client: any;


  connect(username: string, password: string): void {
    this.client = createClient({
      url: 'redis://redis-14507.c289.us-west-1-2.ec2.cloud.redislabs.com:14507',
      password,
    });

    this.client.on('error', (err:any) => console.log('Redis Client Error', err));

    this.client.connect();

  }

}
