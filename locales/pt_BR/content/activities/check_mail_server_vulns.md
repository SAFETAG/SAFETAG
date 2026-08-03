---
title: Conexões de e-mail inseguras
approaches:
  - Técnico
position: 50
authors:
  - SAFETAG
remote_options:
  - with-support
skills_required:
  - sslstrip
  - monitoramento de tráfego
skills_trained: []
summary: |
  Um problema comum com os serviços de e-mail é a falta de criptografia adequada. A equipe só deve poder se conectar ao servidor de e-mail da organização usando criptografia SSL ou TLS.Quando um funcionário envia ou recebe um e-mail, um invasor com acesso à mesma rede local pode facilmente e de forma invisível ler, gravar ou modificar todas as mensagens em trânsito de e para o servidor de e-mail da organização.Mesmo um funcionário informado que tente configurar seu cliente de e-mail para exigir criptografia SSL ou TLS não conseguirá fazê-lo porque o servidor de e-mail não oferece suporte a isso. Para o webmail, um funcionário que tente inserir o endereço alternativo seguro (“https://”;) ao fazer login pode não conseguir fazê-lo, porque o aplicativo Webmail não oferece suporte a isso.O adversário pode ser alguém, como um cliente do cibercafé onde um funcionário está trabalhando, que por acaso está usando a mesma rede local para se conectar à Internet. Ou pode ser alguém que trabalha para uma organização com acesso privilegiado à rede relevante, como o provedor de serviços de Internet (ISP) da %{organização}.
overview: ''
materials_needed: ''
considerations: ''
walk_through: |
  Se o invasor quiser ver o tráfego de e-mails da vítima (provavelmente porque não conseguiu pegar uma senha não criptografada, que teria permitido que ele se conectasse como a vítima e lesse seus e-mails direto), ele pode precisar fazer um segundo ataque, um pouco mais complicado, que também deve dar acesso à senha da vítima e ao conteúdo dos e-mails dela.Para capturar mensagens enviadas (SMTP), o processo é quase igual ao [exercício de monitoramento de tráfego](https://safetag.org/pt_BR/activities/monitor_open_wireless_traffic).
recommendations: |
  Criptografia (SSL, TLS ou HTTPS) em todos os serviços autenticados (principalmente e-mail) é obrigatória. Isso deve valer tanto para conexões diretas com o servidor de e-mail (por exemplo, via IMAP, MAPI, SMTP) quanto para serviços de webmail.Quem usa o Outlook ou outro cliente de e-mail só deve poder se conectar ao servidor de e-mail da organização usando criptografia SSL ou TLS. Tentativas de conexão sem criptografia devem falhar. Todos os clientes de e-mail dos funcionários devem ser reconfigurados de acordo.
organization_size_under: 1000
time_required_minutes: 30
---
