---
title: Respondendo a ameaças avançadas
position: 130
summary: |
  Esse componente permite que o auditor identifique, classifique e analise comportamentos suspeitos em um dispositivo ou em uma rede. Dependendo da análise, o auditor pode precisar investigar mais a fundo uma infecção por malware, analisar um binário e determinar se ele é malicioso ou não, além de recomendar medidas urgentes de mitigação.
short_summary: Identifique, classifique e analise comportamentos suspeitos em um dispositivo ou em uma rede para detectar possíveis ameaças avançadas e recomendar medidas urgentes de mitigação.
the_flow_of_information: "![](/img/advanced_threat.png)"
method_icon: "/img/advanced_threat_icon.png"
guiding_questions: |
  * A organização acha que já tem malware? Se sim, quais são as evidências disso?
  * Os funcionários receberam mensagens suspeitas, tipo e-mails ou mensagens instantâneas?
  * Com base na pesquisa de contexto e nas atividades da organização, qual é a probabilidade de ataques direcionados?
  * Quanto tempo deve ser dedicado a uma análise mais completa durante a auditoria em si, e que outros fatores podem alterar isso?
  * Quais são as implicações do malware direcionado para a organização e para o processo de avaliação atual?
  * Que tipos de malware devem desencadear uma abordagem de resposta a incidentes?
authors:
  - SAFETAG
activities:
  - Análise de Atividade Suspeita
  - Perícia (análise forense) digital e obtenção de evidências
  - Análise Forense (Perícia)
  - Resposta a incidentes e contato de emergência
  - Pesquia de Contexto Técnico
  - Varredura de Rede
references:
  - Análise de Malware
  - Análise Forense (Perícia)
operational_security: |
  * Para trabalhos com alto nível de ameaças em potencial, o auditor deve fazer uma **Avaliação da Capacidade do Adversário** mais completa, com base no trabalho de pesquisa do contexto técnico. Tem Alguma Ameaça Persistente Avançada (APT, _Advanced Persistent Threat_) que deva ser levada em conta? Como elas funcionam? Tem algum indicador conhecido de comprometimento que deva ser procurado?
  * Antes dessa etapa, deve-se assinar um acordo com a organização sobre a captura de dados em dispositivos infectados.
  * O auditor deve garantir que tenha um entendimento claro com a organização sobre um plano de resposta a incidentes, pontos de contato e processo para permitir discussões seguras.
  * Lidar com software malicioso é arriscado, você precisa estar ciente das ameaças ao redor, não infecte a si mesmo ou mais máquinas.
  * Não envie arquivos para serviços de terceiros (use hashes). Tenha muito cuidado ao identificar informações potencialmente visadas.
  * Use VPNs ou Tor para pesquisar se estiver realizando a pesquisa em um país altamente competitivo com o país da organização ou conhecido por vigilância.
  * Para infecções ou incidentes graves, o auditor e a organização podem concordar, por meio do Plano de Resposta a Incidentes, em limpar ou reformatar dispositivos críticos. Isso consome muito tempo e pode resultar na perda de dados, programas críticos cuja mídia de instalação/licença foi perdida e possível reinfecção. Proceda com extrema cautela e clareza.
info_required: []
outputs: |
  Por causa do tempo curto, o auditor deve se concentrar em identificar atividades suspeitas e classificá-las rapidinho. Muitas delas vão ser falsos positivos relacionados a outros softwares não maliciosos que fazem a máquina “agir de forma estranha” ou outros tipos de softwares maliciosos como ransomware, ou  menos graves (e não direcionados), como _adware_ (programas e scripts de publicidade).Quando isso não puder ser descartado, coletar evidências, fazer pesquisas e análises básicas e avaliar o risco e o impacto em relação às prioridades da organização vai ajudar a priorizar as ações futuras. É melhor deixar a análise binária aprofundada para o trabalho pós-auditoria, durante as fases de relatório e acompanhamento. Se ativos críticos forem comprometidos, o auditor pode precisar coordenar medidas urgentes de mitigação com outros especialistas em TI.O gerenciamento do tempo é extremamente crucial ao responder a possíveis infecções por malware e ameaças semelhantes mais avançadas. Se usar esse método, o auditor deve questionar constantemente se deve continuar esse processo ou concluir outros aspectos de seu plano de auditoria. No final do processo de auditoria, não compreender a tolerância ao risco da organização, a capacidade existente, as práticas/processos/políticas atuais e os ativos informacionais existentes prejudicará a capacidade do auditor de fornecer um relatório priorizado ou compreender o contexto em torno da atividade potencialmente maliciosa que descobriu.Os principais resultados da identificação de ameaças avançadas devem ser evidências como arquivos, e-mails, capturas de tela e URLs incluídos em mensagens ou detectados em conexões suspeitas.
info_provided: []
purpose: |
  É muito comum encontrar comportamentos, processos, tráfego e outras “atividades estranhas” suspeitas durante uma auditoria SAFETAG. Os profissionais SAFETAG devem estar sempre atentos a atividades suspeitas ao aplicarem outros métodos SAFETAG e suas atividades, desde interações e discussões com a equipe até avaliações práticas de dispositivos e análises de tráfego.
preparation: |
  #### Habilidades básicas
  * Saber identificar elementos maliciosos, fazer varreduras em máquinas e limpá-las
  * Capacidade de fazer uma pesquisa inicial sobre malware com segurança
  * Capacidade de criar uma imagem de uma máquina e praticar bons processos de perícia digital e captura de evidências (veja a [Atividade Obter Evidências](https://safetag.org/pt_BR/activities/evidence_capture))
  * Contatos com especialistas em análise de malware para uma investigação mais aprofundada.
---
