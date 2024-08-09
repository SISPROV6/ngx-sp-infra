import { Component, OnInit } from '@angular/core';
import { AuthStorageService } from 'src/app/auth/storage/auth-storage.service';

import configVersion from "../../../project/utils/version/version.config.json";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(private _authStorage: AuthStorageService) { }

  ngOnInit(): void {
    this.nomeUsuario = this._authStorage.user;

    this.version = configVersion.preReleaseLabel ? `${configVersion.preReleaseLabel}${configVersion.version}` : `${configVersion.version}`;
  }

  public version: string;
  public nomeUsuario: string

  public cardsTela = [
    { NOME: "Painel de Pessoas", ROTA: "/painel-pessoas", DESCRICAO: "Fluxo de Pessoas que dá acesso à listagem e formulários referentes à tabela de Pessoas", EQUIPE: "ESTÁGIO" },
    
  ]
}
