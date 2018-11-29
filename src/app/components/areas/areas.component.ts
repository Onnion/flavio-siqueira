import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.scss']
})
export class AreasComponent implements OnInit {

  public areaSelected = 'legal-permits';
  public areas = [
    {
      id: 'property',
      label: 'PROPERTY',
      resume: 'Atuamos nas Regularizações e Legalizações de imóveis, com o objetivo de resguardar o direito de propriedade dos nossos clientes, promovendo assim uma completa valorização imobiliária, bem como uma maior tranquilidade e segurança jurídica.',
      data: [
        'regularização fundiária do imóvel: analisando e obtendo os documentos do imóvel, do vendedor ou comprador para assegurar as aquisições e vendas.',
        'Elaboração de contratos e demais instrumentos comerciais, tais como: promessas de compra e venda, permuta, doações, locação, arrendamento, escrituras diversas.',
        'Análise de questões pertinentes ao uso e ocupação do solo, zoneamento, restrições ambientais, financiamentos, hipotecas e outros assuntos imobiliários.',
        'Assessoria e legalização de: Loteamentos, Condomínios diversos, parcelamento do solo, remembramento e desmembramentos, incorporação imobiliária, etc...',
        'Regularização de imóveis rurais com a obtenção de certificação e CCIR - INCRA; ITR/Receita Federal; CAR órgãos ambientais, desmembramento e remembramento, desmatamento e georreferenciamento (através de topógrafo cadastrado no INCRA).',
        'Processos de usucapião.',
        'Análises dos documentos necessários às transações imobiliárias (compra e venda, locação, usufruto, doação, etc...).',
        'Regularização de imóveis em inventário.',
        'Defesa dos direitos inerentes à propriedade em geral.',
        'Representação de questões atinentes a direitos reais sobre imóveis.',
        'Contratos imobiliários (Locação, Compra e Venda, Permutas, Dação em Pagamento, Incorporação Imobiliária, Built to Suit, Administração de Imóveis, Arrendamentos, Shopping Centers, etc...).',
        'Aquisição de imóveis urbanos e rurais.',
        'Parcelamento do solo (remembramentos e desmembramentos).',
        'Assessoria em Financiamento imobiliário.',
        'Due Diligence (Investigação e auditoria comAnálise de Risco).',
        'Retificações e demarcações de área.'
      ]
    },
    {
      id: 'legal-permits',
      label: 'LEGAL PERMITS',
      resume: 'Como forma de solucionar os problemas ocasionados aos nossos clientes decorrentes de fiscalizações públicas, bem como minimizar as consequências e os custos financeiros envolvidos com a aquisição de imóveis irregulares, disponibilizamos nossos serviços de obtenção das autorizações legais.',
      data: [
        'Obtenção e Manutenção de licenças e alvarás.',
        'Aprovação de plantas e projetos para reforma ou construção.',
        'Obtenção de alvarás de funcionamento, entre outros.',
        'Acompanhamento perante os órgãos públicos para aprovação final de projetos de legalização.',
        'Análise e adequação da propriedade às Leis Municipais (de Uso e Ocupação do Solo, Edificações e Instalações), Estaduais e Federais vigentes.',
        'Acompanhamento e obtenção do Habite-se do imóvel.'
      ]
    },
    {
      id: 'asset-manangement',
      label: 'ASSET MANANGEMENT',
      resume: 'No campo gestão e administração dos ativos imobiliários, buscamos promover uma análise criteriosa da real condição patrimonial dos nossos clientes de sorte a promover um maior retorno financeiro possível bem com uma redução dos custos envolvidos com a aquisição e manutenção de imóveis.',
      data: [
        'Gerenciamento e Administração Imobiliária.',
        'Acompanhamento mensal dos prazos locatícios (Ações Renovatórias).',
        'Administração da Carteira de locações.',
        'Recuperação de Crédito.',
        'Gerenciamento dos contratos e recebimento dos valores locatícios.',
        'Administração de Land Bank e Condomínios em geral.',
        'Vistorias periódicas no imóvel com elaboração de relatórios.'
      ]
    }
  ];


  constructor() { }


  public selectArea(area: string): void {
    this.areaSelected = area;
  }


  ngOnInit() {
  }

}
