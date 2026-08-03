---
title: Rastros de Websites
approaches:
  - Técnico
  - Pesquisa
position: 50
authors:
  - SAFETAG
skills_trained: []
remote_options:
  - Completado
time_required_minutes: 60
organization_size_under: 1000
summary: |
  Usar ferramentas online como ponto de partida para avaliar uma aplicação web a ser auditada é uma boa maneira de expandir o reconhecimento online, bem como iniciar sua avaliação de vulnerabilidades. Você pode criar um perfil e adquirir uma boa compreensão da aplicação web, identificando o que a compõe e as tecnologias por trás dela. A partir daí, pode prosseguir reunindo diferentes estratégias para executar a avaliação de vulnerabilidades.

  Por exemplo, após descobrir diretórios acessíveis na web, você pode começar a procurar arquivos e aplicativos esquecidos que possam conter informações confidenciais, como senhas ou aplicativos desatualizados e vulneráveis. Os sistemas de gerenciamento de conteúdo, embora poderosos, requerem manutenção e atualizações constantes para permanecerem seguros. Muitas vezes, esses sistemas (ou plug-ins específicos deles) ficam desatualizados e se tornam cada vez mais vulneráveis a ataques automatizados e direcionados.

  Algumas ferramentas online oferecem maneiras de realizar varreduras “passivas”, nas quais sua identidade fica oculta da organização-alvo, nos casos em que há Sistemas de Detecção de Intrusão (conhecidos como IDS, do inglês Intrusion Detection System) e os Sistemas de Prevenção de Intrusão (ou IPS, do inglês Intrusion Prevention System) e firewalls implantados. Essas ferramentas devem ser usadas em conjunto com outros resultados do reconhecimento para determinar quais plataformas e servidores que estão fora do escopo.
materials_needed: ""
walk_through: |
  Antes de usar ferramentas mais avançadas e poderosas, como a OpenVAS, algumas etapas rápidas podem ajudar a orientar seu trabalho. Como observação geral, navegar usando um navegador com, pelo menos, o [NoScript](https://addons.mozilla.org/pt-BR/firefox/addon/noscript/) habilitado pode ajudar não apenas a proteger você, mas também a revelar malware ou adware que estejam infectando os sites.

  Registre os detalhes principais sobre o site - determine o provedor de hospedagem, a plataforma, os sistemas de gerenciamento de conteúdo e outros dados básicos. O BuiltWith é uma ótima ferramenta para isso. Existem algumas alternativas, incluindo uma ferramenta de código aberto, o [SiteLab](https://callmeed.github.io/site-lab/). Observe que o BuiltWith é uma ferramenta incluída no recon-ng, mas o resultado que ele fornece não é armazenado atualmente em suas estruturas de dados. Essas ferramentas também podem revelar plug-ins, bibliotecas javascript e sistemas de proteção DDoS, como a CloudFlare.

  **Ferramentas**

  - [BuiltWith](https://builtwith.com) ("Construído com" em inglês
  - [Online Pentesting Tools](https://pentest-tools.com/)(ferramentas de teste de penetração online)
  - [Hacker Target](https://hackertarget.com/)

  ___

  ###### Detecção da versão de gerenciamento de conteúdo

  A identificação da versão de gerenciamento de conteúdo durante a busca por rastros na web pode ser feita usando scripts e ferramentas, ou serviços online.

  Você pode usar alguns sites para determinar o tipo de gerenciador de conteúdo que um site alvo está usando:

  - https://builtwith.com
  - https://sitecheck.sucuri.net
  - http://guess.scritch.org

  Para sistemas de gerenciamento, componentes desatualizados podem ser facilmente explorados por agentes maliciosos.

  **Drupal**

  Para Drupal, tente visitar /CHANGELOG.txt que, se não foi removido manualmente, revelará a versão mais recente do Drupal instalada no servidor. Outros sinais reveladores dependem da versão específica do Drupal; https://web.archive.org/web/20140414103151/http://corporate.adulmec.ro/blog/2010/drupal-detection-test-site-running-drupal mantém uma ferramenta de detecção.

  ```
  Drupal 6.27, 2012-12-19
  ----------------------
  - Fixed security issues (multiple vulnerabilities), see SA-CORE-2012-004.
  Drupal 6.26, 2012-05-02
  ----------------------
  - Fixed a small number of bugs.
  - Made code documentation improvements.
  ```

  **Joomla**

  Para o Joomla, os modelos padrão fornecem dicas importantes sobre as versões com base nas datas de direitos autorais. Versões específicas podem ser encontradas usando este guia: https://web.archive.org/web/20130417104941/http://www.gavick.com/magazine/how-to-check-the-version-of-joomla.html

  **WordPress**

  Os sites WordPress tendem a anunciar o número da versão no cabeçalho de cada página da web, como

  ```

  <meta name="generator" content="WordPress 3.3.1" />

  ```

  Existe uma ferramenta baseada na web com extensões para navegadores disponível aqui: https://www.whitefirdesign.com/tools/wordpress-version-check.html

  Document your finding and list what type of CMS your target is using along with it's version. You can use this information in the next possible activities:
  - Vulnerability Scanning

  Documente suas descobertas e liste o tipo de gerenciador de conteúdo que o site alvo está usando, juntamente com sua versão. Você pode usar essas informações nas próximas atividades possíveis:
  * Varredura de vulnerabilidades
  * Pesquisa de vulnerabilidades

  ###### Análise de TLS/HTTPS

  Se a organização está tentando disponibilizar seus sites usando TLS/SSL mas está tendo problemas para obter o “cadeado verde” no navegador, utilize a ferramenta de verificação em https://www.whynopadlock.com/ para analisar problemas comuns que impedem a conformidade
considerations: ""
skills_required:
  - Varredura de Website
overview: |
  * Determine a versão de qualquer sistema de gerenciamento de conteúdo usado pela organização
  * Procure por possíveis vulnerabilidades de segurança para essa versão.
recommendations: |
  As plataformas de gerenciamento mais populares oferecem alertas por e-mail e formas semi-automatizadas de atualizar o programa. Certifique-se de que alguém responsável pelo site está recebendo esses e-mails ou verificando regularmente se há atualizações disponíveis. As atualizações de segurança devem ser aplicadas imediatamente. No entanto, é uma boa prática ter um site de “teste” onde você pode testar qualquer atualização de gerenciamento antes de colocar em um site de produção.


  Para sites que utilizam um sistema de gerenciamento de conteúdo (Drupal, Wordpress, Joomla ou similar), é importante utilizar uma ferramenta popular e de código aberto (em oposição a uma ferramenta personalizada que uma empresa de web design criou para sua base de clientes). Ferramentas de código aberto são mais propensas a ter suas falhas de segurança descobertas e corrigidas rapidamente, mas a responsabilidade de manter-se atualizado com essas atualizações de segurança permanece com a organização.

  As principais ferramentas de gerenciamento possuem painéis e outras ferramentas para ajudar a alertar o responsável pelo site sobre atualizações disponíveis, e as atualizações de segurança devem ser aplicadas rapidamente. Para sites que armazenam dados como senha, vale a pena explorar recursos de segurança adicionais – a segurança de senha integrada, mesmo em sistemas de gerenciamento modernos, é fraca, mas os métodos para melhorá-la variam muito dependendo do sistema.


  Para sites criados com software de gerenciamento personalizado que não recebe atualizações regulares, é altamente recomendável migrar para um sistema mais padrão e de código aberto.

  Observe que sites “estáticos” – aqueles criados com uma ferramenta de design da web e enviados para um servidor – são mais seguros (sem código para quebrar) e também resistem mais facilmente a ataques de negação de serviço. No entanto, eles são mais difíceis de manter e atualizar e funcionam melhor apenas para sites do tipo “brochura”.

  Para sistemas de gerenciamento personalizados, é altamente recomendável migrar para um sistema padrão e de código aberto.

  Uma prática cada vez mais recomendada é que as organizações aproveitem os níveis “gratuitos” dos serviços de mitigação de DDoS, dos quais o  [CloudFlare](https://www.cloudflare.com/pt-br/) é provavelmente o mais conhecido. Um desafio desses serviços gratuitos pode ser o fato de eles terem limites definidos para sua proteção. Com o CloudFlare, as organizações podem solicitar fazer parte do programa [Project Galileo](https://www.cloudflare.com/pt-br/galileo/) para oferecer suporte a sites em risco, mesmo além do escopo normal de suporte.

  Uma alternativa comunitária e de código aberto é o [Deflect](https://deflect.ca/), que é totalmente gratuito para sites elegíveis

  Alguns desses serviços são detectados pela ferramenta BuiltWith, mas também é possível verificar os cabeçalhos de resposta HTTP (no Chromium/Chrome, disponíveis na ferramenta Inspecionar Elemento ou usando o Firebug](https://addons.mozilla.org/en-US/firefox/addon/firebug/) no Firefox. Consulte a [wiki do Deflect's](https://wiki.deflect.ca/wiki/About_Deflect#Is_it_working.3F) para obter mais informações.

  Guia para ONGs diagnosticarem problemas com um site: [Digital First Aid Kit](https://digitalfirstaid.org/topics/website-not-working/)

  As organizações que desejam ter TLS/SSL (HTTPS) em seus sites podem considerar o uso do [LetsEncrypt](https://letsencrypt.org/pt-br/) ou selecionar um provedor de hospedagem que ofereça [suporte total ao LetsEncrypt](https://community.letsencrypt.org/t/web-hosting-who-support-lets-encrypt/6920) para gerar certificados TLS gratuitos.
---
