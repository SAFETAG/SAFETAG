---
title: Login Inseguro no Website
approaches:
  - Técnico
position: 50
authors:
  - SAFETAG
remote_options:
  - Completado
skills_required:
  - Varredura de Vulnerabilidades
skills_trained: []
summary: |
  As senhas administrativas e de usuário no site são enviadas sem criptografia.
overview: |
  * Descubra o link de login do administrador do site
  * Veja se tem uma opção SSL para fazer o login
materials_needed: ''
considerations: ''
walk_through: |
  Os usuários e editores do site fazem login no site http://www.sampleorg.org/user/login. Não tem segurança SSL nessa página, nem parece ter a opção de usar SSL. DescriçãoNem todo o tráfego da web é criptografado, embora em 2025 criptografia é utilizada em mais de 95% de websites (mas não necessariamente em apps e outros protocolos e sites mais antigos).Como muitos sites passaram do upload de arquivos no back-end para um sistema de gerenciamento de conteúdo front-end, além de se tornarem mais complexos com contas de usuário e interação, falta de criptografia se torna problemática.Quando um administrador (ou qualquer usuário) faz login, sua senha é enviada em texto simples. Se o tráfego não vou criptografado, qualquer pessoa na mesma rede (em uma cafeteria ou local de trabalho), bem como qualquer pessoa no controle da rede (proprietário da cafeteria, administrador da rede do local de trabalho, ISP ou governo) pode facilmente interceptar a senha (muitas vezes simplesmente pesquisando o fluxo de tráfego da rede por “senha”). Isso permite que um adversário tenha acesso administrativo a um site, publique conteúdo falso, instale malware ou tente descobrir outras contas onde a mesma senha possa ser usada.Primeiro, determine a página de login, se não houver um link “login do usuário” visível. A maioria dos sistemas CMS tem um caminho de login padrão (para o Drupal, é /user/login, por exemplo). Em seguida, tente acessar essa página por meio de uma conexão SSL.
recommendations: |
  Sem a criptografia na conexão (SSH, TLS/SSL, etc), todas as senhas – incluindo a usada para acesso administrativo ao site – são transmitidas pela Internet sem criptografia. Elas ficam imediatamente visívei para um agente estatal através do provedor de internet e também podem ser interceptadas se acessadas por um funcionário em uma conexão Wi-Fi compartilhada (em uma cafeteria ou aeroporto) e, finalmente, se o invasor tiver invadido a rede do escritório (consulte a seção Acesso local). Além disso, sem SSL/TLS, é muito fácil para esses mesmos atores interceptar o tráfego destinado ao seu site e capturar logins de usuários e informações de perfil. Habilitar versões recentes SSL/TLS (e torná-lo o padrão para o seu site) também protege os usuários do seu site.Historicamente, esta segurança tinha um custo alto, tanto o certificado SSL quanto, muitas vezes, uma atualização do próprio plano de hospedagem. Na maioria dos casos, os sites agora podem receber suporte HTTPS gratuito por meio do [LetsEncrypt](https://letsencrypt.org/) e também por meio de plataformas de proteção DDoS.Se uma organização atualiza seu site via FTP, vale a pena notar que o FTP é igualmente inseguro. Muitos provedores de hospedagem oferecem SFTP ou FTPS (duas versões diferentes, mas seguras, do FTP) ou WebDAV seguro para fazer upload de arquivos. Esses devem ser usados e FTP “simples” ser completamente desativoas, se possível.Ao mudar para SSL/FTP seguro depois de usar as versões simples, os webmasters também devem atualizar todas as senhas administrativas e verificar se nenhuma etapa do processo (gerenciamento/painel do provedor de hospedagem, upload de arquivos, edição de CMS) passa por canais “claros”.
organization_size_under: 1000
time_required_minutes: 15
---
