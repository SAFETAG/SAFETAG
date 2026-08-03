---
title: Auditoria de autenticação para segurança da conta
position: 50
approaches:
  - Técnico
authors:
  - Lukasz Krol
  - Neil Blazevic
skills_required:
  - Administração de Sistema
  - Entrevistando
skills_trained: []
remote_options:
  - Completado
time_required_minutes: 60
organization_size_under: 25
summary: >
  Esse exercício ajuda o auditor a avaliar a segurança e a eficácia das práticas
  de autenticação de contas dentro de uma organização e dá orientações sobre como desenvolver recomendações para implementar um kit de ferramentas de autenticação resistente a phishing.
short_summary: Avaliar a segurança e a eficácia das práticas de autenticação de contas dentro de uma organização e dar orientações sobre como implementar uma abordagem resistente a phishing.
overview: >
  * Verificar se estão usando fatores de segurança resistentes a phishing, como chaves de segurança físicas ou senhas de acesso

  * Verificar se não faltam controles de autenticação essenciais, como a verificação em duas etapas

  * Avaliar o uso de gerenciadores de credenciais ou senhas em toda a organização, incluindo configurações importantes, como ativar
  o preenchimento automático neles

  * Analisar estratégias que diminuam a superfície de ataque e simplifiquem a autenticação, como usar o login único sempre que possível e restringir concessões OAuth inseguras 

  (acesso a dados de aplicativos de terceiros)

  * Avaliar a educação interna, a comunicação e as políticas que incentivam a organização a adotar práticas positivas, como gerar e armazenar todas as suas senhas no gerenciador de credenciais ou gerenciador de senhas

  * Fornecer recomendações para planejar o login sem senha
materials_needed: |
  - Listas de verificação de autenticação preparadas podem ser úteis
  - Lista de funcionários
  - Lista de contas e serviços online usados na organização
  - Chaves de segurança físicas para distribuir, se disponíveis
walk_through: >-
  utilizando iscas (phishing) sendo um ataque comum e é um grande risco para empresas de todos os tamanhos. Tradicionalmente, os esforços anti-phishing têm se
  concentrado em ensinar os funcionários a reconhecer e denunciar e-mails suspeitos. Embora essa estratégia ainda deva desempenhar um papel importante nos
  treinamentos de segurança dos funcionários, a vigilância por si só não é suficiente; até mesmo profissionais de segurança cibernética já caíram em golpes de phishing. Por isso, é importante que a organização também desenvolva um kit de ferramentas tecnológicas que atenue a eventualidade de um funcionário ser vítima de phishing.

  ###### Auditoria do uso de serviços online para configuração de autenticação resistente a phishing

  Praticamente todos os principais serviços online agora oferecem autenticação de dois fatores, que protege contra roubo/vazamento de senhas. Mesmo assim, a maioria das formas de autenticação de dois fatores continua vulnerável a um ataque de phishing em que um adversário captura um nome de usuário, senha e
  código de dois fatores e os usa para fazer login na página da web real antes que o código de dois fatores expire. Embora sofisticado, esse tipo de ataque é cada vez mais comum.

  Por outro lado, a autenticação usando chaves de segurança físicas (usadas no modo U2F , Titan ou FIDO2) e senhas são projetadas para serem resistentes até mesmo a ataques de phishing sofisticados. Elas são criptograficamente vinculadas ao site onde foram registradas; é impossível para uma página falsa capturar a entrada de uma chave de segurança física ou senha e usá-la para fazer login na página real.

  Para verificar se as organizações estão utilizando opções de autenticação fortes, audite a configuração de suas contas online:

  1. Se ainda não tiver feito isso, crie uma lista de ativos de todos os serviços e plataformas relacionados ao trabalho que a organização usa. Alguns deles podem ser gerenciados centralmente, enquanto outros podem ser contas individuais nas quais os funcionários se inscreveram ou até mesmo contas privadas importantes (por exemplo, o e-mail privado de um diretor-executivo de alto escalão).  2. Consulte a documentação da plataforma (ou seções de configurações) para identificar quais suportam métodos de autenticação resistentes a phishing, como chaves de acesso e chaves de segurança físicas no modo U2F ou FIDO2. Na pior das hipóteses, algumas plataformas podem nem mesmo suportar 2FA.

  3. Faça uma revisão completa ou uma amostragem de contas e plataformas para identificar como a autenticação está configurada. Para serviços gerenciados centralmente pela organização, revise as configurações de domínio para controles que se aplicam a todos os usuários, como a aplicação de 2FA, a ativação do login sem senha e a ativação ou exigência de chaves de segurança físicas.

  4. Ao realizar a revisão, verifique configurações importantes, como redefinição/recuperação de senha e mecanismos de redefinição de emergência, como e-mails e números de telefone de backup. Em alguns casos, pode ser importante verificar se a organização possui/tem controle sobre contas online importantes, por exemplo, nos casos onde funcionários ou consultores anteriores criaram contas.


  Essa atividade é eficaz quando combinada com pesquisas de vazamento de senhas. Use serviços como [haveibeenpwned.com](https://haveibeenpwned.com), [Firefox Monitor](https://monitor.mozilla.org/), [Google Password Checkup](https://passwords.google.com/) e [Dehashed](https://dehashed.com/) em colaboração com a equipe para verificar se há vazamentos em seus e-mails pessoais e organizacionais. A presença de vazamentos de senhas reforça a necessidade tanto da autenticação de dois fatores (2FA) tradicional quanto de métodos de autenticação fortes.

  As conclusões sobre o acima exposto podem ser apresentadas no seu relatório. Nos casos onde as organizações ainda não começaram a usar métodos de autenticação fortes, inclua recomendações para que adotem senhas e chaves de segurança físicas, quando possível. 

  ###### Auditoria do uso de gerenciadores de senhas

  Os gerenciadores de senhas (agora também chamados de gerenciadores de credenciais) são uma ferramenta de segurança
  fundamental, e o auditor deve pesquisar como e se eles são usados dentro de uma organização. Organizações nas quais todos os funcionários trabalham em tempo integral e usam dispositivos fornecidos pela empresa podem contar com um gerenciador de senhas fornecido pela empresa.
  Organizações que contam com funcionários em tempo parcial ou voluntários também podem permitir que os funcionários usem seus próprios gerenciadores. É preferível ter um único gerenciador de senhas no trabalho, especialmente quando se trata de compartilhar credenciais dentro das organizações (várias pessoas podem, por exemplo, precisar acessar a mesma conta geral).

  Siga estas etapas para revisar o uso de gerenciadores de senhas por uma organização:

  * Eles não estão usando gerenciadores de senhas? A ausência desses gerenciadores entre os usuários pode indicar práticas perigosas de senha, como reutilização de senhas, senhas fracas e senhas escritas fisicamente.

  * Pesquise o gerenciador ou gerenciadores de senhas usados na organização. Eles são de uma empresa confiável? Eles foram auditados de forma independente? Houve algum incidente de segurança envolvendo o gerenciador de senhas?

  * Explore se há credenciais relacionadas ao trabalho que foram salvas em outros lugares que não os gerenciadores de senhas (isso pode incluir cadernos, post-its e outros)

  * Verifique se a equipe está usando o gerenciador de senhas para gerar senhas seguras. Se não estiverem, considere investigar se eles usam práticas fortes para definir senhas razoavelmente fortes e exclusivas ou se eles criam senhas fracas e reutilizam senhas em todos os serviços.

  * Garanta que os detalhes de login para serviços importantes (e-mail da organização, mídias sociais, serviços de hospedagem de código e outros) sejam salvos apenas no gerenciador de senhas e em nenhum outro lugar.

  * Certifique-se de que todos na organização tenham seu gerenciador de senhas configurado para preencher automaticamente os logins nas páginas da web. Isso não é somente uma questão de conveniência; o gerenciador de senhas irá comparar a URL que irá preencher automaticamente com a URL salva em seu banco de dados. Se eles não corresponderem, ele normalmente se recusará a preencher automaticamente. Essa é uma excelente proteção contra phishing, pois impede que o gerenciador de senhas preencha a URL em sites maliciosos e de phishing

  * Explore como o gerenciador de senhas se encaixa no processo de gerenciamento de contas compartilhadas. Em muitas organizações, há contas gerenciadas por várias pessoas (um exemplo frequente são as redes sociais) e, dependendo de como essas contas são configuradas, seu nível de segurança pode ser inferior ao ideal. Por exemplo, sem gerenciadores de senhas, é comum configurar as contas compartilhadas com senhas inseguras (para serem mais fáceis de compartilhar entre as equipes) e sem autenticação de dois fatores. Para cobrir esse cenário, os gerenciadores de senhas baseados em nuvem podem incluir recursos de compartilhamento, facilitando a configuração da conta com uma senha forte e alguma forma de autenticação de dois fatores. Se o gerenciador de senhas que a organização usa não suporta o compartilhamento de credenciais, ainda pode haver outras soluções alternativas, mas o que é certo é que as contas compartilhadas devem ser consideradas em nosso processo de avaliação.

  Compartilhe os resultados e recomendações com base nesta análise.

  ###### Analise aplicativos de terceiros e sistemas de Início de Sessão Único (SSO, Single Sign-on) para reduzir ainda mais a superfície de ataque

  Alguns invasores online também podem abusar das concessões OAuth (aplicativos de terceiros), nas quais serviços externos podem acessar ou modificar recursos como e-mails, documentos ou calendários da sua organização. Em casos legítimos, esse pode ser um serviço útil, permitindo funcionalidades adicionais. Ainda assim, essas permissões são uma porta pela qual um invasor ou serviço não confiável pode obter acesso a recursos internos. Além disso, muitos funcionários podem conceder acesso a recursos e esquecer que o fizeram, levando a um acúmulo de permissões ao longo do tempo. Ao trabalhar com o administrador da organização:

  * Verifique o painel de administração e analise quais permissões OAuth, se houver, os usuários da organização concederam a serviços externos

  * Os usuários individuais também podem verificar quais aplicativos de terceiros receberam permissão para acessar os dados de suas contas. Se não for possível obter uma visão geral de toda a organização com um administrador, trabalhe com uma amostra de usuários para revisar suas contas individuais na página Configurações da plataforma.

  * Investigue se é possível restringir as permissões OAuth em toda a organização, de modo que elas se apliquem apenas a um pequeno grupo de serviços confiáveis ou incluídos na lista de permissões. Observe que alguns programas, como o [Programa de Proteção Avançada](https://landing.google.com/intl/en_in/advancedprotection/) do Google, limitarão as concessões OAuth a uma lista de permissões confiáveis.

  Muitos serviços online agora oferecem suporte ao login único (SSO). Ele permite que você faça login em muitos serviços diferentes usando uma única conta, normalmente uma usada para e-mail ou mídia social. Muitas organizações usam seu provedor de e-mail principal como provedor de SSO. O SSO é um pouco diferente das concessões OAuth: o primeiro usa um serviço somente como camada de autenticação, enquanto o segundo permite que o serviço compartilhe dados com outros. O SSO costuma ser uma ótima ideia
  do ponto de vista da segurança, pois exige que os administradores auditem e apliquem normas rígidas de segurança de login (como autenticação de dois fatores resistente a phishing) para uma conta, em vez de várias. Vale a pena:

  * Verificar todos os serviços que a organização usa e ver quais deles suportam SSO

  * Recomendar que a organização implemente SSO, se ainda não o fez

  * Garantir que os usuários sigam padrões de segurança rigorosos, como senhas longas e exclusivas e uma forma de autenticação de dois fatores resistente a phishing ao fazer login no serviço “principal”, que então concede acesso a outros serviços por meio do SSO

  ### ### Avaliar os conhecimentos internaos a comunicação e as políticas

  Os invasores continuam a se adaptar e refinar suas técnicas, inclusive quando se trata de phishing. As medidas defensivas também mudam rapidamente, com os fabricantes criando novas ferramentas e fluxos de trabalho que podem mitigar o
  phishing padrão ou OAuth. É importante que as pessoas na organização entendam os riscos e os possíveis ataques, bem como as possíveis medidas de mitigação. Avalie a educação interna, a comunicação de diretrizes/ameaças e as políticas por meio de entrevistas, pesquisas e análise de documentos:

  * Pesquise como os gerentes e outros responsáveis pela segurança veem o phishing. Recomende que a organização trate a mitigação do phishing como uma prioridade fundamental, já que uma parte significativa dos ataques cibernéticos começa com o phishing

  * Explore se a organização preparou algum material de treinamento sobre phishing. Verifique se esses materiais ensinam apenas como reconhecer mensagens de phishing ou também demonstram tecnologias como preenchimento automático do gerenciador de senhas e autenticação de dois fatores resistente a phishing. Recomende que os treinamentos se concentrem no último.

  * Recomende que a organização implemente políticas que imponham autenticação de dois fatores resistente a phishing. Isso pode incluir exigir que todos usem o preenchimento automático do gerenciador de senhas e autenticação resistente a phishing

  * Verifique se existe uma maneira simples pela qual as pessoas dentro da organização possam sinalizar ou relatar e-mails e mensagens de texto suspeitos para outras pessoas dentro da organização

  * Se a organização usa chaves de segurança físicas ou senhas, explore como elas são gerenciadas. Anote as políticas existentes, por exemplo, se as pessoas recebem chaves de segurança físicas durante a integração, se as senhas são registradas em dispositivos pessoais ou físicos, etc.

  * Garanta que a organização tenha um fluxo de trabalho testado para verificar e restaurar o acesso de usuários cujas chaves de segurança físicas ou senhas tenham sido perdidas, ou danificadas
considerations: ""
recommendations: >
  As chaves de acesso (passkeys) podem ser usadas como um segundo fator junto
  com as senhas ou podem ser usadas para o chamado login sem senha. Embora
  cada vez mais serviços estão migrando para este formato, é necessário pesar prós e contras. O login sem senha tem seus próprios desafios, incluindo garantir que as chaves de acesso sejam armazenadas e gerenciadas com segurança, garantir que as chaves de acesso sejam protegidas com senhas fortes ou biometria e criar um fluxo de trabalho para revogar rapidamente as chaves de acesso perdidas ou roubadas. Ao trabalhar com os administradores de segurança de uma organização, vale a pena:


  * Explorar como diferentes organizações e serviços estão adotando logins sem senha e quais são as experiências dos usuários com eles


  * Discutir as vantagens e possíveis desvantagens dos logins sem senha


  Considere se programas de proteção avançada, como os oferecidos pelo [Google](https://landing.google.com/intl/en_us/advancedprotection/), [Microsoft](https://accountguard.microsoft.com/), [Proton](https://proton.me/support/proton-sentinel) ou [Meta](https://www.facebook.com/help/1052552578831700/) são adequados para a organização. 


  Se o orçamento permitir (ou se forem possíveis soluções pro bono ou de código aberto adequadas), considere recomendar que as organizações migrem para plataformas de contas empresariais ou comerciais gerenciadas centralmente, que permitem definir políticas de segurança em toda a organização.
---
