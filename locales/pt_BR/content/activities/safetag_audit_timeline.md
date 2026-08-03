---
title: Audit Timeline and Planning
approaches:
  - Pesquisa
position: 50
authors: []
skills_trained: []
remote_options:
  - Parcial
time_required_minutes: 60
organization_size_under: 1000
summary: Esta seção fornece orientações sobre como criar um cronograma de auditoria realista para o seu plano de avaliação.
materials_needed: ""
walk_through: |
  #### Prepare-se para a incerteza

  Um roteiro SAFETAG é um fluxo de dados nítido e claro de informações e dados de entradas até os resultados. Mas a realidade, em geral, é menos direta. Existem algumas partes essenciais do processo de auditoria que devem ser feitas, mas outras são mais flexíveis. Os resultados de sua análise e da exploração da rede podem atrapalhar o processo de maneiras impossíveis de prever. As entrevistas pré-auditoria e sua própria pesquisa sobre o contexto, sobre a organização e a preparação, têm como objetivo dar a você a melhor ideia possível da situação em que você vai se encontrar, mas, mesmo com tudo isso, imprevistos acontecem.

  #### Antes de Viajar

  * Acordos, contratos, escopo, documento de análise de riscos
  * Pesquisa remota
    * Dados de fontes abertas: DNS, MX, Web, pesquisa através das redes sociais e buscadores (DuckDuckGo, Google, Bing, outros)
    * Informações reveladas encontradas durante a preparação / etc. (exemplo: endereço IP do escritório). Informações obtidas com nmap
  * Preparação e Bagagem
    * Vistos/planejamento de viagem
    * Guardar equipamentos na bagagem de forma adequada
    * Software (executar atualizações) e preparação da lista de dicionários (dicionários do idioma local, além da criação de uma lista personalizada de senhas com base em palavras-chave do site, endereços e datas


  #### Primeiro Dia

  As prioridades no primeiro dia incluem conhecer a equipe (especialmente, para a pessoa mais técnica que fará auditoria). É muito tentador mergulhar de cabeça e começar a trabalhar, mas é fundamental estabelecer conexões com a equipe, especialmente com aqueles que você não conheceu durante as entrevistas. Você pode descobrir fontes ocultas de talento ou resistência, informações históricas e novas partes da infraestrutura ou práticas e políticas que talvez ainda não tenha encontrado.

  * Conheça a equipe, discuta operações e planeje interrupções com os principais funcionários
  * Discussões presenciais sobre riscos, desafios, receios, dúvidas e experiências relacionadas à segurança digital
  * (Se relevante) Tente invadir a rede Wi-Fi sem saber a senha
  * Paralelamente, colete beacons Wi-Fi enquanto não estiver conectado a nenhuma rede (reiniciando as conexões).
  * Assim que a senha do Wi-Fi for obtida (por meio de quebra ou solicitação), inicie uma captura do tráfego descriptografado e execute-a pelo maior tempo possível para análise posterior
  * Mapeie a rede "visível" (nmap)


  #### Passos inicias
  Do ponto de vista da coleta de dados, os primeiros passos são tentar acessar a rede sem fio adivinhando a senha, mas também conectar-se à rede e capturar o tráfego para análise durante a noite. Isso fornece outras visões sobre a tecnologia e os serviços reais usados na rede, diferentes tanto da visão da gerência e da equipe de TI, quanto de outras ferramentas discutidas pela equipe.

  * Fazer associação entre varreduras nmap, endereços MAC e beacons a pessoas e sistemas específicos, além de servidores/hardware de rede
  * Verificar o tráfego capturado em busca de senhas, cookies de autenticação, tráfego suspeito e conexões não criptografadas

  #### Dias Seguintes (no local)

  No dia seguinte, quando estiver no local, você provavelmente terá analisado os dados da pesquisa coletados e terá alguns pontos específicos a investigar. Agora também é hora de começar a realizar as tarefas de auditoria.

  * Análise mais aprofundada sobre quais equipamentos estão conectados e o que estão fazendo
  * Comece a organizar as vulnerabilidades e categorizar em relação à metodologia de auditoria
  * Tarefas de auditoria externa
  * Tarefas de auditoria interna
  * Tarefas de auditoria física


  #### Último Dia (no local)

  * Discutir as conclusões iniciais e as respostas
  * Sugestões para treinamento complementar, recursos a serem consultados e, possivelmente, treinamentos direcionados para funcionários relevantes (por exemplo, o que é uma senha segura? Como se comunicar com segurança?)
  * Discutir os próximos passos: Relatório SAFETAG, contato com instrutores/treinadores, como procurar ajuda para implementação ou incidentes imediatos. 


  #### Exploração e contatosAo longo de toda a auditoria, reserve tempo para interagir com a equipe — pare para tomar um café, almoce com eles, converse. Isso pode ser integrado a outras partes do processo, como as avaliações dos dispositivos dos usuários, além de ser completamente independente e natural. Ter um melhor relacionamento com a equipe tornará os exercícios em grupo, especialmente o trabalho de avaliação de riscos, muito mais fluidos. 

  Sempre que iniciar uma varredura (airodumping, nmap, openvas...), será um bom momento para se levantar e dar uma volta.

  #### Revisão e definição de expectativas

  Reservar um tempo no final da semana de auditoria (geralmente agitada) é muito importante para garantir que as próximas etapas estejam absolutamente claras em termos de cronogramas e protocolos de comunicação. Isto é abordado de forma mais profunda na seção [revisão][debrief]


  #### Clean up

  Se você usou papel ou post-its durante a auditoria, certifique-se de destruí-los de forma segura (triturando, queimando ou rasgando em pedaços pequenos) antes de sair do local no último dia. Da mesma forma, todos os relatórios digitais devem ser armazenados em mídias seguras e excluídos de todos os outros locais. Consulte a seção de [segurança operacional](https://safetag.org/pt_BR/methods/operational_security/) e as notas em cada ítem para obter mais detalhes. Limpe todos os quadros brancos usados e verifique todas as câmeras que você usou e remova fotos ou vídeos confidenciais.

  #### Acompanhamento e Relatórios

  É importante e útil fazer uma série de verificações com a organização para apoiar sua capacidade de responder a quaisquer incidentes, compreender outros tópicos do relatório, e ajudar a fornecer um cronograma para o relatório final, é valioso para manter o envolvimento pós-auditoria e apoiar as mudanças necessárias. Consulte as seções [Relatório[(https://safetag.org/pt_BR/activities/report_creation/), e [Suporte e Acompanhamento](https://safetag.org/pt_BR/methods/follow_up/), para obter detalhes específicos sobre esta fase.
considerations: ""
skills_required: []
overview: Revise estas notas em preparação para a auditoria ao começar a planejar seu calendário. Elas fornecem um esboço aproximado de como programar seu tempo no local para uma auditoria SAFETAG e alguns lembretes sobre o trabalho que você precisa concluir antes de chegar ao local (seja um país, estado ou cidade diferente). Você pode adaptar este plano ou usar suas seções como modelo para desenvolver seu próprio cronograma, adequado ao contexto de cada auditoria.
recommendations: ""
---
