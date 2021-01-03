import time
from fabric import Connection
from civo import Civo

civo = Civo()

ip_server = civo.instances.search(filter='hostname:{}'.format('csi-agrohealthhack'))[0]['public_ip']
username = 'admin'

c = Connection('{}@{}'.format(username, ip_server))
result = c.put('webroot.gz', remote='/tmp')
print("Uploaded {0.local} to {0.remote}".format(result))
c.sudo('apt update')
c.sudo('apt install -qy nginx')
c.sudo('rm -rf /var/www/html/*')
c.sudo('tar -C /var/www/html/ -xzvf /tmp/webroot.gz')
