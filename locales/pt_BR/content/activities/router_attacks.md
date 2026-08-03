---
title: Ataques Atraves de Roteadores
approaches:
  - Técnico
position: 50
authors:
  - SAFETAG
remote_options:
  - with-support
skills_required:
  - Redes
skills_trained: []
summary: |
  Muitos roteadores sem fio ainda usam a senha padrão listada em [“_RouterDefault Password Search_”](http://www.routerpasswords.com/) (Pesquisa de senhas padrão de roteadores), o que significa que qualquer pessoa com acesso à rede também pode assumir o controle total do roteador, adicionando ferramentas de acesso remoto ou configurando outros ataques.
short_summary: Verifique se os roteadores têm senhas padrão, firmware sem correções (_patches_), vulnerabilidades, acesso remoto e configuração incorreta.
overview: |
  * Encontre o(s) roteador(es) (o comando``route`` funciona bem para isso)
  * Teste usar senhas padrão
  * Verifique se há atualizações/vulnerabilidades não corrigidas e backdoors
  * Investigue dados potencialmente valiosos (logs, usuários conectados)
materials_needed: ''
considerations: ''
walk_through: ''
recommendations: |
  **Altere as senhas padrão do roteador**As senhas, principalmente nos dispositivos de rede principais, são super importantes. Use um gerenciador de senhas para salvar a nova senha (ou esteja pronto para redefinir o roteador para as configurações padrão de fábrica).Embora nominalmente “dentro do firewall” e protegidos contra ataques remotos, deixar os roteadores com senhas padrão, especialmente roteadores sem fio cujas redes são frequentemente compartilhadas com visitantes, é um risco potencialmente muito alto para uma organização. Qualquer pessoa que tenha obtido acesso à rede por meios legítimos ou outros meios poderia alterar sutilmente a configuração do roteador para fornecer acesso remoto ou encaminhar o tráfego para um servidor designado pelo invasor. Essas alterações podem facilmente passar despercebidas por longos períodos de tempo.Um medo comum é esquecer a nova senha do roteador. Um sistema de gerenciamento de senhas é uma solução óbvia, mas se o roteador estiver em um local seguro, até mesmo um post-it seria melhor do que a senha padrão.
organization_size_under: 100
time_required_minutes: 15
---
