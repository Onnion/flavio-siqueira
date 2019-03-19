import { Component, OnInit, OnDestroy } from "@angular/core";
import { interval, Subscription, VirtualTimeScheduler } from "rxjs";

@Component({
  selector: "app-areas",
  templateUrl: "./areas.component.html",
  styleUrls: ["./areas.component.scss"]
})
export class AreasComponent implements OnInit, OnDestroy {
  public areaSelected = "legal-permits";
  public areas = [
    {
      id: "property",
      label: "PROPERTY",
      resume:
        "Atuamos nas Regularizações e Legalizações de imóveis, com o objetivo de resguardar o direito de propriedade dos nossos clientes, promovendo assim uma completa valorização imobiliária, bem como uma maior tranquilidade e segurança jurídica.",
      data: [
        "Due Diligence (Investigação e auditoria com análise de risco);",
        "Assessoria e legalização de: Loteamentos, Condomínios diversos, parcelamento do solo, remembramento e desmembramentos, incorporação imobiliária, etc;",
        "Regularização fundiária do imóvel: analisando e obtendo os documentos do imóvel, do vendedor ou comprador para assegurar as aquisições e vendas;",
        "Análise de questões pertinentes ao uso e ocupação do solo, zoneamento, restrições ambientais, financiamentos, hipotecas e outros assuntos imobiliários;",
        "Regularização de imóveis rurais com a obtenção de certificação e CCIR - INCRA; ITR/Receita Federal, CAR órgãos ambientais, desmembramento e remembramento, desmatamento e georreferenciamento (através de topógrafo cadastrado no INCRA)."
      ]
    },
    {
      id: "legal-permits",
      label: "LEGAL PERMITS",
      resume:
        "Como forma de solucionar os problemas ocasionados aos nossos clientes decorrentes de fiscalizações públicas, bem como minimizar as consequências e os custos financeiros envolvidos com a aquisição de imóveis irregulares, disponibilizamos nossos serviços de obtenção das autorizações legais.",
      data: [
        "Obtenção e Manutenção de licenças e alvarás.",
        "Aprovação de plantas e projetos para reforma ou construção.",
        "Obtenção de alvarás de funcionamento, entre outros.",
        "Acompanhamento perante os órgãos públicos para aprovação final de projetos de legalização.",
        "Análise e adequação da propriedade às Leis Municipais (de Uso e Ocupação do Solo, Edificações e Instalações), Estaduais e Federais vigentes.",
        "Acompanhamento e obtenção do Habite-se do imóvel."
      ]
    },
    {
      id: "asset-manangement",
      label: "ASSET MANANGEMENT",
      resume:
        "No campo gestão e administração dos ativos imobiliários, buscamos promover uma análise criteriosa da real condição patrimonial dos nossos clientes de sorte a promover um maior retorno financeiro possível bem com uma redução dos custos envolvidos com a aquisição e manutenção de imóveis.",
      data: [
        "Gerenciamento e Administração Imobiliária.",
        "Acompanhamento mensal dos prazos locatícios (Ações Renovatórias).",
        "Recuperação de Crédito.",
        "Gerenciamento dos contratos e recebimento dos valores locatícios.",
        "Administração de Land Bank e Condomínios em geral.",
        "Vistorias periódicas no imóvel com elaboração de relatórios."
      ]
    }
  ];
  private timer: Subscription;
  constructor() {}

  public selectArea(area: string): void {
    this.areaSelected = area;
  }

  private toggleArea(): void {
    let index = 0;
    const timer = interval(5000);

    this.timer = timer.subscribe(() => {
      this.areaSelected;
      index = index === 2 ? 0 : index + 1;
      this.selectArea(this.areas[index].id);
    });
  }

  ngOnInit() {
    this.toggleArea();
  }

  ngOnDestroy() {
    this.timer.unsubscribe();
  }
}
