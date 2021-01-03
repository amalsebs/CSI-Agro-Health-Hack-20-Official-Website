import time
from fabric import Connection
from civo import Civo

civo = Civo()

hostname_default = 'csi-agrohealthhack'

#ip_server = civo.instances.search(filter='hostname:{}'.format(hostname_default))[0]['public_ip']
ip_server = 137.97.66.137
username = 'admin'

c = Connection('{}@{}'.format(username, ip_server))
result = c.put('webroot.gz', remote='/tmp')
print("Uploaded {0.local} to {0.remote}".format(result))
c.sudo('apt update')
c.sudo('apt install -qy nginx')
c.sudo('rm -rf /var/www/html/*')
c.sudo('tar -C /var/www/html/ -xzvf /tmp/webroot.gz')
