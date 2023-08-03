# wavelength-js
A rewrite of wavelength

How to deploy:

https://github.com/aws-samples/amazon-cloudfront-secure-static-site

aws --region us-east-1 cloudformation package \
    --template-file templates/main.yaml \
    --s3-bucket wavelength-js \
    --output-template-file packaged.template

aws --region us-east-1 cloudformation deploy \
    --stack-name wavelength-js \
    --template-file packaged.template \
    --capabilities CAPABILITY_NAMED_IAM CAPABILITY_AUTO_EXPAND \
    --parameter-overrides  DomainName=wavlengthjs.com SubDomain=www HostedZoneId=<GET HOST ID>