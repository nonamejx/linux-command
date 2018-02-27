import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommandService } from '../command.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Command } from '../shared/command';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-command-search',
  templateUrl: './command-search.component.html',
  styleUrls: ['./command-search.component.css']
})
export class CommandSearchComponent implements OnInit {
  
  commands: Command[];
  filteredCommands: Command[];

  private badgeCssBox: string[] = [
    'badge badge-primary', 
    'badge badge-success', 
    'badge badge-info', 
    'badge badge-warning',
    'badge badge-danger'
  ];

  constructor(private commandService: CommandService) { }

  ngOnInit(): void {
    this.commandService.getCommands().subscribe(
      resultArray => {
        this.commands = resultArray;
        this.filteredCommands = resultArray;
      }, 
      error => console.log("Error :: " + error)
    );
  }

  /** SEARCH commands */
  search(term: string): void {
    this.filteredCommands = this.commands.filter(
      command => 
        command.description.toLocaleLowerCase().includes(term.toLocaleLowerCase()) ||
        this.tagContainsTerm(term, command.tags)
    );
  }

  tagContainsTerm(term: string, tags: string[]): boolean {
    for (let tag of tags) {
      return tag.toLocaleLowerCase().includes(term.toLocaleLowerCase());
    }
  }

  /** RANDOM CSS CLASS */
  randomBadgeCss(): string {
    return this.badgeCssBox[Math.floor(Math.random() * this.badgeCssBox.length)];
  }

}
