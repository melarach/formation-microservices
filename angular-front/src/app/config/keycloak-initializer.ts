import { KeycloakService } from 'keycloak-angular';
import { environment } from 'src/environments/environment';


export function initializer(keycloak: KeycloakService): () => Promise<any> {
    return (): Promise<any> => {
        return new Promise(async (resolve, reject) => {
          try {
            await keycloak.init({
                config: {
                    url: environment.keycloak.issuer,
                    realm: environment.keycloak.realm,
                    clientId: environment.keycloak.clientId
                },
              loadUserProfileAtStartUp: false,
              initOptions: {
                onLoad: 'login-required',
                checkLoginIframe: true
              },
              bearerExcludedUrls: []
            });
            resolve(true);
          } catch (error) {
            reject(error);
          }
        });
      };
}
