import { Component, OnInit } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(private sqlite: SQLite) {

  }

  ngOnInit(): void {
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('create table danceMoves(name VARCHAR(32))', [])
        .then(() => console.log('Executed SQL'))
        .catch(e => console.log(e));
    }).catch(e => console.log(e));
  }
}
