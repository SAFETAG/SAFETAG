---
title: Reconhecimento
position: 40
method_icon: /img/reconnaissance_icon.png
summary: |
  A metodologia de avaliação remota concentra-se na observação direta de uma
  organização e sua infraestrutura, consistindo em reconhecimento passivo (isto
  é, sem interagir diretamente com a rede, equipamentos ou outros ativos da organização
  auditada) a partir de fontes de dados disponíveis publicamente (“_Open Source
  Intelligence_”). Isso permite à pessoa que faz a auditoria identificar recursos
  disponíveis publicamente (como sites, extranets, servidores de e-mail, mas também informações de mídias sociais) conectados à organização, e colete remotamente informações sobre esses recursos.
short_summary: Use fontes de dados disponíveis publicamente para identificar recursos, ativos e informações conectadas à organização e que formam uma superfície de ataque potencial.
the_flow_of_information: "![](/img/reconnaissance.png)"
guiding_questions: |
  * Considerando as necessidades de segurança da organização, ela “vaza” alguma informação
  confidencial online (localização, identidade dos funcionários, locais dos programas?)
  * É possível identificar parceiros ou beneficiários através dos sites da organização?
  * Qual é o padrão dos endereços de e-mail dos funcionários?
  * Algum servidor, usuário ou conta de e-mail da organização já foi comprometido no passado?
  * As contas de redes sociais dos executivos/funcionários estão dentro do escopo e, em caso afirmativo, estão em conformidade com as políticas de redes sociais da organização? Que ameaças adicionais elas introduzem?
authors:
  - SAFETAG
activities:
  - Reconhecimento Manual
  - Reconhecimento Automatizado
  - Rastros de Websites
  - Enumeração de DNS
references:
  - Inteligência em fontes abertas (geral)
  - Coleta de informações organizacionais
  - Buscas
  - Buscas no Pastebin
  - Recon-ng
outputs: |
  * Dossiê com informações de “fontes abertas” sobre a organização, seus parceiros e beneficiários, disponíveis online.
  * Uma lista de endereços de e-mail dos membros da organização.
  * Identificação e mapeamento de serviços externos e internos expostos involuntariamente.
  * Possíveis vulnerabilidades nos sites e servidores externos da organização.
  * Informações existentes originadas de violações e vazamentos identificados em sites como o paste-bin.
  * Seguir o plano de resposta a incidentes, caso sejam identificados problemas de alto risco.
operational_security: |
  * Embora esta atividade não se concentre na identificação de vulnerabilidades, ela pode assim mesmo expor certas ameaças, particularmente no que diz respeito a informações acessíveis ao público que se presume serem confidenciais, como a identidade de funcionários, a existência de relações delicadas entre parceiros e financiadores,o histórico da organização de participação em eventos ou viagens em locais arriscados, entre outras informações que demandam cuidados e confidencialidade extras.
info_required: []
info_provided: []
purpose: |
  Embora grande parte do SAFETAG se concentre nos desafios de segurança digital dentro e ao redor do escritório, informações não intencionais disponíveis em “fontes abertas” (também chamadas fontes públicas) podem representar ameaças reais e merecem atenção significativa. Isso também aumenta a compreensão da auditora sobre a presença digital da organização e dá informações sobre vulnerabilidades específicas a serem investigadas quando a auditora estiver nos locais físicos da organização.
preparation: |
  Esta seção:
  * não requer acesso privilegiado aos escritórios, infraestrutura ou funcionários da organização;
  * baseia-se principalmente em fontes de dados de terceiros, e na observação e investigação superficial da infraestrutura da organização;
  * geralmente pode ser realizada à partir de qualquer conexão segura de Internet.
---
